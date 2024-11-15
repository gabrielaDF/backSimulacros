require("dotenv").config();
const { Sequelize } = require("sequelize");

// Configuración de conexión a la base de datos
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const conn = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/simulacros`,
  {
    logging: false,
    native: false,
    ssl: false,
  }
);

// Verificación de la conexión
conn
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Importación de modelos
const Usuario = require("./models/User/User")(conn, Sequelize);
const RegistroAmbiental =
  require("./models/RegistroAmbiental/RegistroAmbiental")(conn, Sequelize);
const Resultados = require("./models/Result/result")(conn, Sequelize);
const SimulacroIndividual =
  require("./models/SimulacroIndividual/SimulacroIndividual")(conn, Sequelize); // Nuevo modelo SimulacroIndividual

// Configuración de asociaciones
Usuario.hasMany(RegistroAmbiental, { foreignKey: "usuarioId" });
RegistroAmbiental.belongsTo(Usuario, { foreignKey: "usuarioId" });

Usuario.hasMany(Resultados, { foreignKey: "usuarioId" });
Resultados.belongsTo(Usuario, { foreignKey: "usuarioId" });

Usuario.hasMany(SimulacroIndividual, { foreignKey: "usuarioId" }); // Relación de Usuario con SimulacroIndividual
SimulacroIndividual.belongsTo(Usuario, { foreignKey: "usuarioId" }); // Relación de SimulacroIndividual con Usuario

// Exportación de la conexión y los modelos para su uso en otros archivos
module.exports = {
  conn,
  Usuario,
  RegistroAmbiental,
  Resultados,
  SimulacroIndividual,
};
