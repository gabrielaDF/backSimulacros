const { DataTypes } = require("sequelize");

const Usuario = require("../User/User"); // Importa el modelo de Usuario

module.exports = (conn) => {
  const Resultados = conn.define("Resultados", {
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

  return Resultados;
};
