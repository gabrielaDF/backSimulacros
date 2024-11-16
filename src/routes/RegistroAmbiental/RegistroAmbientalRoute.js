const express = require("express");
const {
  registrarRegistroAmbiental,
} = require("../../controllers/registroAmbiental/regitroAmbiental");
const router = express.Router();

router.post("/registro-ambiental", registrarRegistroAmbiental);

module.exports = router;
