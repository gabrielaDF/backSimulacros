const Simulacro = require("../../models/SimulacroIndividual/SimulacroIndividual");
const Usuario = require("../../models/User/User");

// Controlador para registrar un nuevo simulacro
const registrarSimulacro = async (
  usuarioId,
  tipoSimulacro,
  cantidadTotalPreguntas,
  cantidadCorrectas,
  cantidadIncorrectas,
  respuestasDetalle
) => {
  try {
    // Verifica si el usuario existe
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    // Crear un nuevo simulacro con nombres de propiedades consistentes con el modelo
    const nuevoSimulacro = await Simulacro.create({
      usuarioId,
      tipoSimulacro,
      cantidadTotalPreguntas,
      cantidadCorrectas,
      cantidadIncorrectas,
      respuestasDetalle,
    });

    return nuevoSimulacro;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  registrarSimulacro,
};
