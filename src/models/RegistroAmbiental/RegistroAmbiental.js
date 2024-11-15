const { DataTypes } = require("sequelize");
const { conn } = require("../../db"); // Importa la conexión a la base de datos
const Usuario = require("./Usuario"); // Asegúrate de importar el modelo de Usuario

// Definición del modelo de Registro Ambiental
const RegistroAmbiental = conn.define("RegistroAmbiental", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Se generará automáticamente
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false, // Campo obligatorio para registrar la fecha de recolección
    defaultValue: DataTypes.NOW, // Fecha por defecto en el momento de creación
  },
  pesoLatas: {
    type: DataTypes.FLOAT,
    allowNull: false, // Peso de las latas recolectadas
    defaultValue: 0,
  },
  pesoCuadernos: {
    type: DataTypes.FLOAT,
    allowNull: false, // Peso de los cuadernos recolectados
    defaultValue: 0,
  },
  pesoBotellas: {
    type: DataTypes.FLOAT,
    allowNull: false, // Peso de las botellas recolectadas
    defaultValue: 0,
  },
  cantidadLatas: {
    type: DataTypes.INTEGER,
    allowNull: false, // Cantidad de latas recolectadas
    defaultValue: 0,
  },
  cantidadBotellas: {
    type: DataTypes.INTEGER,
    allowNull: false, // Cantidad de botellas recolectadas
    defaultValue: 0,
  },
  cantidadCuadernos: {
    type: DataTypes.INTEGER,
    allowNull: false, // Cantidad de cuadernos recolectados
    defaultValue: 0,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario, // Modelo al que está asociado (Usuario)
      key: "id", // Clave primaria del modelo Usuario
    },
    allowNull: false, // Cada registro debe estar asociado a un usuario
  },
});

module.exports = RegistroAmbiental;
