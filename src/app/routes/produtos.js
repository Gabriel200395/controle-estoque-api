const express = require('express');
const router = express.Router();

const ProdutoControllers = require('../controllers/ProdutoControllers');


router.get("/produtos",ProdutoControllers.listaProduto);
router.get("/produtos/:id", ProdutoControllers.listaIdProduto);
router.post("/produtos", ProdutoControllers.adicionaProduto);
router.delete("/produtos/:id", ProdutoControllers.deleteProduto);
router.put("/produtos/:id", ProdutoControllers.updateProduto);

module.exports = router;