const Nota = require("../../models/Result/result");
const Usuario = require("../../models/User/User");

// Controlador para registrar una nueva nota
const registrarNota = async (
  usuarioId,
  numeroSimulacro,
  puntajeLecturaCritica,
  puntajeMatematicas,
  puntajeCienciasSociales,
  puntajeCienciasNaturales,
  puntajeIngles
) => {
  try {
    // Verifica si el usuario existe
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    // Calcular el puntaje total
    const puntajeTotal =
      puntajeLecturaCritica +
      puntajeMatematicas +
      puntajeCienciasSociales +
      puntajeCienciasNaturales +
      puntajeIngles;

    // Crear una nueva nota
    const nuevaNota = await Nota.create({
      usuarioId,
      numeroSimulacro,
      puntajeLecturaCritica,
      puntajeMatematicas,
      puntajeCienciasSociales,
      puntajeCienciasNaturales,
      puntajeIngles,
      puntajeTotal,
    });

    return nuevaNota;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  registrarNota,
};
