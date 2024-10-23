const { crearUsuario } = require("../../controllers/user/register");

// Handler para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
  const { nombreCompleto, correo, contraseña, rol } = req.body;

  try {
    // Usa el controlador para crear el usuario
    const nuevoUsuario = await crearUsuario({
      nombreCompleto,
      correo,
      contraseña,
      rol,
    });

    // Responde con el usuario creado
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    // Responde con un error en caso de fallar
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registrarUsuario };
