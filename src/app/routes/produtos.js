const express = require('express');
const router = express.Router();

const ProdutoControllers = require('../controllers/ProdutoControllers');


router.get("/produto",ProdutoControllers.listaProduto);
router.get("/produto/:id", ProdutoControllers.listaIdProduto);
router.post("/produto", ProdutoControllers.adicionaProduto);
router.delete("/produto/:id", ProdutoControllers.deleteProduto);
router.put("/produto/:id", ProdutoControllers.updateProduto);

module.exports = router;