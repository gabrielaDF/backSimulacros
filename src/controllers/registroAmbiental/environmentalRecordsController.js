// controllers/environmentalRecordsController.js
const EnvironmentalRecord = require("../../models/RegistroAmbiental/RegistroAmbiental");

const getEnvironmentalRecords = async (usuarioId) => {
  return await EnvironmentalRecord.findAll({
    where: { usuarioId },
  });
};

module.exports = { getEnvironmentalRecords };
