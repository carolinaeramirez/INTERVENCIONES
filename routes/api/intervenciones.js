const router = require("express").Router();

const { Intervenciones } = require("../../db");

router.get("/", async (req, res) => {
  console.log('Funciona')
  const intervenciones = await Intervenciones.findAll();
  res.json(intervenciones);
});

router.post("/", async (req, res) => {
  const intervencion = await Intervenciones.create(req.body);
  res.json(intervencion);
});

router.put("/:intervencionId", async (req, res) => {
  await Intervenciones.update(req.body, {
    where: { id: req.params.intervencionId },
  });
  res.json({ success: "editado" });
});

router.delete("/:intervencionId", async (req, res) => {
    await Intervenciones.destroy( {
      where: { id: req.params.intervencionId },
    });
    res.json({ success: "borrado" });
  });

module.exports = router;
