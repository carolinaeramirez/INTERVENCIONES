const Sequelize = require("sequelize");

const IntervencionModel = require("./models/intervenciones");
const FuncionariosModel = require ('./models/funcionarios');

const sequelize = new Sequelize("hjx5DVaLoR", "hjx5DVaLoR", "x5JnD0cyqf", {
  host: "remotemysql.com",
  dialect: "mysql",
});
const Funcionarios = FuncionariosModel(sequelize, Sequelize);
const Intervenciones = IntervencionModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("tablas sincronizadas");
});

module.exports = {
  Intervenciones,
  Funcionarios,
};
