const Usuario = require("../../models/User/User");

// Controlador para validar el login de un usuario
const loginUsuario = async ({ correo, contraseña }) => {
  try {
    // Busca al usuario por su correo
    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    // Verifica si la contraseña ingresada es válida
    const esValida = await usuario.validarContraseña(contraseña);
    if (!esValida) {
      throw new Error("Contraseña incorrecta");
    }

    // Si es válida, devuelve el usuario
    return usuario;
  } catch (error) {
    // Retorna un error en caso de fallar
    throw new Error("Error en el proceso de login: " + error.message);
  }
};

module.exports = { loginUsuario };
