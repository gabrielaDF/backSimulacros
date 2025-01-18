// handlers/environmentalRecordsHandler.js
const {
  getEnvironmentalRecords,
} = require("../../controllers/registroAmbiental/environmentalRecordsController");

const getEnvironmentalRecordsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const records = await getEnvironmentalRecords(userId);
    if (!records || records.length === 0) {
      return res
        .status(404)
        .json({ message: "No records found for the specified user." });
    }
    return res.status(200).json(records);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while fetching records.",
      error: error.message,
    });
  }
};

module.exports = { getEnvironmentalRecordsByUserId };
