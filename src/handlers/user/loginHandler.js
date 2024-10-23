const { loginUsuario } = require("../../controllers/user/login");

// Handler para el login de usuario
const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    // Usa el controlador para verificar el login
    const usuario = await loginUsuario({ correo, contraseña });

    // Responde con éxito y los datos del usuario (puedes agregar JWT aquí si es necesario)
    res.status(200).json({ message: "Login exitoso", usuario });
  } catch (error) {
    // Responde con un error en caso de fallar
    res.status(401).json({ message: error.message });
  }
};

module.exports = { login };
