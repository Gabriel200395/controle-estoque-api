const express = require('express');
const router =  express.Router()

const EmpresaControllers = require('../controllers/EmpresaControllers');

router.get("/empresa",  EmpresaControllers.listarEmpresa);
router.get("/empresa/:id",  EmpresaControllers.listaIdEmpresa);
router.get("/empresa/:id/produtos",  EmpresaControllers.listaProdutosEmpresa);
router.post("/empresa",  EmpresaControllers.adiconaEmpresa);
router.delete("/empresa/:id",  EmpresaControllers.deleteEmpresa);
router.put("/empresa/:id",  EmpresaControllers.alteraEmpresa);


module.exports = router;
