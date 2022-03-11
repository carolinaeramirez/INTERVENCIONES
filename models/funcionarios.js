const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "funcionario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
        },
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
        },
      },
      jerarquia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
        },
      },
      lp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
