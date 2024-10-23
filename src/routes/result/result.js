const { Router } = require("express");
const { handleRegistroNota } = require("../../handlers/result/result");

const router = Router();

// Ruta para registrar una nueva nota
router.post("/result", handleRegistroNota);

module.exports = router;
