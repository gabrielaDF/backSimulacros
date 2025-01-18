const { DataTypes } = require("sequelize");
const conn = require("../../db");
const Usuario = require("../User/User");
module.exports = (conn, DataTypes) => {
  const RegistroAmbiental = conn.define("RegistroAmbiental", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pesoLatas: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    pesoCuadernos: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    pesoBotellas: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    cantidadLatas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cantidadBotellas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cantidadCuadernos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return RegistroAmbiental;
};
