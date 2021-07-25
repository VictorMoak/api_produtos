const { Router } = require('express');

const ProdutosController = require('./app/Controllers/ProdutosController');

const routes = new Router();

routes.post("/api/addProdutos", ProdutosController.add);
//routes.get("/", ProdutosController.index);
//routes.get("/api/produtos", ProdutosController.show);

module.exports = routes;