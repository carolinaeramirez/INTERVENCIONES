const router = require("express").Router();

const { Funcionarios } = require("../../db");

router.post("/", async (req, res) => {
  const usuario = await Funcionarios.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    jerarquia: req.body.jerarquia,
    lp: req.body.lp,
  })
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/", async (req, res) => {
  const usuario = await Funcionarios.findAll();
  res.json(usuario);
});

module.exports = router;
