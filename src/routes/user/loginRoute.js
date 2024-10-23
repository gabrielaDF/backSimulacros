const { Router } = require("express");
const { login } = require("../../handlers/user/loginHandler");

const router = Router();

// Ruta para el login de usuario
router.post("/login", login);

module.exports = router;
