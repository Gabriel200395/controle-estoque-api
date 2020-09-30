const express = require('express');
const router =  express.Router()

const UserControllers = require('../controllers/useControllers');

router.get("/usuario",  UserControllers.listarUsuarios);
router.get("/usuario/:id",  UserControllers.listaId);
router.post("/usuario",  UserControllers.adiconaUsuario);
router.delete("/usuario/:id",  UserControllers.deleteUser);
router.put("/usuario/:id",  UserControllers.alteraUsuario);


module.exports = router;
