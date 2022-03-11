const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define("intervencion", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: { type: DataTypes.DATE, allowNull: false },
    hecho: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    observaciones: { type: DataTypes.STRING, allowNull: false },
    funcionario_id: { type: DataTypes.INTEGER, allowNull: true },
    efecto_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    timestamps: false,
  });
};
