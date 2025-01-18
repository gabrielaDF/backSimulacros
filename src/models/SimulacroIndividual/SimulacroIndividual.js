const { DataTypes } = require("sequelize");

const Usuario = require("../User/User"); // Importa el modelo de Usuario

module.exports = (conn) => {
  // Definición del modelo de SimulacroIndividual
  const SimulacroIndividual = conn.define("SimulacroIndividual", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    tipoSimulacro: {
      type: DataTypes.ENUM(
        "lecturaCritica",
        "matematicas",
        "ingles",
        "cienciasSociales",
        "cienciasNaturales"
      ),
      allowNull: false,
    },
    cantidadTotalPreguntas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidadCorrectas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidadIncorrectas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    respuestasDetalle: {
      type: DataTypes.JSONB, // Almacenará el objeto con el número de pregunta y su resultado
      allowNull: false,
      // Ejemplo de formato: [{"numeroPregunta": 1, "correcta": true}, {"numeroPregunta": 2, "correcta": false}]
    },
  });

  return SimulacroIndividual;
};
