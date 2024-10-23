const { DataTypes } = require("sequelize");
const { conn } = require("../../db");
const Usuario = require("./Usuario"); // Importa el modelo de Usuario

const Resultados = conn.define("Resultados", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Se generará automáticamente
  },
  numeroSimulacro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Asegúrate de que sea un número positivo
    },
  },
  puntajeLecturaCritica: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  puntajeMatematicas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  puntajeCienciasSociales: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  puntajeCienciasNaturales: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  puntajeIngles: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  puntajeTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 500,
    },
  },
});

// Relación entre Resultados y Usuario
Resultados.belongsTo(Usuario, { foreignKey: "usuarioId" });

module.exports = Resultados;
