const express = require("express");
const {
  handleRegistroSimulacro,
} = require("../../handlers/Simulacro/simulacroHandler");

const router = express.Router();

// Ruta para registrar un simulacro
router.post("/registro", handleRegistroSimulacro);

module.exports = router;
