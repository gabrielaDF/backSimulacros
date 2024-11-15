// handlers/user/register.js
const { crearUsuario } = require("../../controllers/user/register");

// Handler para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
  const {
    nombreCompleto,
    correo,
    contraseña,
    rol,
    institucionEducativa,
    grado,
  } = req.body;

  try {
    // Usa el controlador para crear el usuario
    const nuevoUsuario = await crearUsuario({
      nombreCompleto,
      correo,
      contraseña,
      rol,
      institucionEducativa,
      grado,
    });

    res
      .status(201)
      .json({ message: "Usuario registrado exitosamente", nuevoUsuario });
  } catch (error) {
    // Responde con un error en caso de fallar
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registrarUsuario };
