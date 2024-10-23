const { registrarNota } = require("../../controllers/result/result");

const handleRegistroNota = async (req, res) => {
  const {
    usuarioId,
    numeroSimulacro,
    puntajeLecturaCritica,
    puntajeMatematicas,
    puntajeCienciasSociales,
    puntajeCienciasNaturales,
    puntajeIngles,
  } = req.body;

  try {
    // Verifica que todos los datos estén presentes
    if (
      !usuarioId ||
      !numeroSimulacro ||
      puntajeLecturaCritica == null ||
      puntajeMatematicas == null ||
      puntajeCienciasSociales == null ||
      puntajeCienciasNaturales == null ||
      puntajeIngles == null
    ) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Registrar la nota utilizando el controlador
    const nuevaNota = await registrarNota(
      usuarioId,
      numeroSimulacro,
      puntajeLecturaCritica,
      puntajeMatematicas,
      puntajeCienciasSociales,
      puntajeCienciasNaturales,
      puntajeIngles
    );

    res.status(201).json({ message: "Nota registrada con éxito", nuevaNota });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleRegistroNota,
};
