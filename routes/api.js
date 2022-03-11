const router = require("express").Router();

const apiIntervencionesRouter = require ('./api/intervenciones')
const apiFuncionariosRouter = require ('./api/funcionarios')

router.use('/intervenciones', apiIntervencionesRouter)
router.use('/funcionarios', apiFuncionariosRouter)



module.exports= router;




