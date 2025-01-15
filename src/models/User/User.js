const bcrypt = require("bcrypt");

module.exports = (conn, DataTypes) => {
  const Usuario = conn.define("Usuario", {
    usuarioId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
      },
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100],
      },
    },
    rol: {
      type: DataTypes.ENUM("administrador", "institucion", "estudiante"),
      allowNull: false,
    },
    institucionEducativa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    grado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // Hooks para cifrar contraseñas
  Usuario.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.contraseña = await bcrypt.hash(user.contraseña, salt);
  });

  Usuario.beforeUpdate(async (user) => {
    if (user.changed("contraseña")) {
      const salt = await bcrypt.genSalt(10);
      user.contraseña = await bcrypt.hash(user.contraseña, salt);
    }
  });

  // Método para validar contraseñas
  Usuario.prototype.validarContraseña = async function (contraseña) {
    return await bcrypt.compare(contraseña, this.contraseña);
  };

  return Usuario;
};
