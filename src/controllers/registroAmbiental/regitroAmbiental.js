// controllers/ambiental/registrarDatos.js
const RegistroAmbiental = require("../../models/RegistroAmbiental/RegistroAmbiental");

const registrarDatosAmbientales = async ({
  usuarioId,
  fecha,
  pesoLatas,
  pesoCuadernos,
  pesoBotellas,
  cantidadLatas,
  cantidadBotellas,
  cantidadCuadernos,
}) => {
  try {
    const nuevoRegistro = await RegistroAmbiental.create({
      usuarioId,
      fecha,
      pesoLatas,
      pesoCuadernos,
      pesoBotellas,
      cantidadLatas,
      cantidadBotellas,
      cantidadCuadernos,
    });

    return nuevoRegistro;
  } catch (error) {
    throw new Error(
      "Error al registrar los datos ambientales: " + error.message
    );
  }
};

module.exports = { registrarDatosAmbientales };
