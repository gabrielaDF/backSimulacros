// controllers/user/register.js
const Usuario = require("../../models/User/User");

const registerUser = async (req, res) => {
  const {
    nombreCompleto,
    correo,
    contraseña,
    rol,
    institucionEducativa,
    grado,
  } = req.body;

  try {
    // Creación del nuevo usuario 
    const nuevoUsuario = await Usuario.create({
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
    res.status(500).json({ message: "Error al registrar el usuario", error });
  }
};

module.exports = registerUser;
