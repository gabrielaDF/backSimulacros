require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require("./src/db"); // Importa la conexión a la base de datos

// Importa las rutas
const registroRoutes = require("./src/routes/user/registerRoute");
const loginRoutes = require("./src/routes/user/loginRoute");

const server = express();

// Middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// Rutas
server.use("/api/usuarios", registroRoutes); // Rutas para registro de usuarios
server.use("/api/usuarios", loginRoutes); // Rutas para login de usuarios

// Sincronización de la base de datos y inicialización del servidor
const PORT = process.env.PORT || 3001;

conn
  .sync({ force: false })
  .then(() => {
    console.log("Database connected successfully");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
