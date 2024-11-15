const { registrarSimulacro } = require("../../controllers/Simulacro/simulacro");

const handleRegistroSimulacro = async (req, res) => {
  const {
    usuarioId,
    tipoSimulacro,
    cantidadTotalPreguntas,
    cantidadCorrectas,
    cantidadIncorrectas,
    respuestasDetalle,
  } = req.body;

  try {
    // Verifica que usuarioId sea un número
    if (
      !usuarioId ||
      isNaN(Number(usuarioId)) ||
      !tipoSimulacro ||
      cantidadTotalPreguntas == null ||
      cantidadCorrectas == null ||
      cantidadIncorrectas == null ||
      !respuestasDetalle
    ) {
      return res
        .status(400)
        .json({ error: "Faltan datos obligatorios o usuarioId no es válido" });
    }

    const nuevoSimulacro = await registrarSimulacro(
      Number(usuarioId), // Asegura que usuarioId es numérico
      tipoSimulacro,
      cantidadTotalPreguntas,
      cantidadCorrectas,
      cantidadIncorrectas,
      respuestasDetalle
    );

    res
      .status(201)
      .json({ message: "Simulacro registrado con éxito", nuevoSimulacro });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleRegistroSimulacro,
};
