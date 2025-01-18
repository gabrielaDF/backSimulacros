const { Router } = require("express");
const {
  getEnvironmentalRecordsByUserId,
} = require("../../handlers/registroAmbiental/environmentalRecordsHandler");

const router = Router();

// Ruta para obtener los registros ambientales por ID de usuario
router.get("/:usuarioId", getEnvironmentalRecordsByUserId);

module.exports = router;
