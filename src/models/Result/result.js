const { DataTypes } = require("sequelize");
const { conn } = require("../../db");
const Usuario = require("../User/User"); // Importa el modelo de Usuario

const Resultados = conn.define("Resultados", {
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Usuarios", // Nombre de la tabla de usuarios
      key: "id",
    },
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numeroSimulacro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntajeLecturaCritica: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntajeMatematicas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntajeCienciasSociales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntajeCienciasNaturales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntajeIngles: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntajeTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Resultados;
