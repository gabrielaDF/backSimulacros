// routes/user/registerRoute.js
const { Router } = require("express");
const registerUser = require("../../controllers/user/register"); // Asegúrate de que la ruta sea correcta

const router = Router();

// Definición de la ruta para el registro
router.post("/register", registerUser); // Asegúrate de que registerUser esté definido

module.exports = router;
