const { DataTypes } = require("sequelize");
const { conn } = require("../../db"); // Importa la conexión a la base de datos
const bcrypt = require("bcrypt");

// Definición del modelo de Usuario
const Usuario = conn.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Se generará automáticamente
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obligatorio
    validate: {
      len: [3, 255], // Longitud mínima y máxima del nombre
    },
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // El correo debe ser único
    validate: {
      isEmail: true, // Valida que sea un correo válido
    },
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 100], // Longitud mínima de la contraseña
    },
  },
  rol: {
    type: DataTypes.ENUM("administrador", "institucion", "estudiante"),
    allowNull: false, // El rol es obligatorio
  },
  institucionEducativa: {
    type: DataTypes.STRING,
    allowNull: true, // Este campo no es obligatorio, pero puedes hacerlo obligatorio si lo prefieres
  },
  grado: {
    type: DataTypes.STRING,
    allowNull: true, // Este campo tampoco es obligatorio, pero puedes cambiarlo si lo deseas
  },
});

// Cifrado de la contraseña antes de crear el usuario
Usuario.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.contraseña = await bcrypt.hash(user.contraseña, salt);
});

// Cifrado de la contraseña antes de actualizarla
Usuario.beforeUpdate(async (user) => {
  if (user.changed("contraseña")) {
    const salt = await bcrypt.genSalt(10);
    user.contraseña = await bcrypt.hash(user.contraseña, salt);
  }
});

// Método para verificar la contraseña
Usuario.prototype.validarContraseña = async function (contraseña) {
  return await bcrypt.compare(contraseña, this.contraseña);
};

module.exports = Usuario;
