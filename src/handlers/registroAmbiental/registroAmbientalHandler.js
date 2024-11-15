// handlers/ambiental/registrarDatosHandler.js
const {
  registrarDatosAmbientales,
} = require("../../controllers/registroAmbiental/regitroAmbiental");

const registrarDatosAmbientalesHandler = async (req, res) => {
  const {
    usuarioId,
    fecha,
    pesoLatas,
    pesoCuadernos,
    pesoBotellas,
    cantidadLatas,
    cantidadBotellas,
    cantidadCuadernos,
  } = req.body;

  try {
    // Llama al controlador para registrar los datos ambientales
    const nuevoRegistro = await registrarDatosAmbientales({
      usuarioId,
      fecha,
      pesoLatas,
      pesoCuadernos,
      pesoBotellas,
      cantidadLatas,
      cantidadBotellas,
      cantidadCuadernos,
    });

    // Responde con el registro creado
    res.status(201).json({
      message: "Datos ambientales registrados exitosamente",
      nuevoRegistro,
    });
  } catch (error) {
    // Responde con un mensaje de error en caso de fallar
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registrarDatosAmbientalesHandler };
