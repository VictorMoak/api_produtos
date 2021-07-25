const { Router } = require('express');

const ProdutosController = require('./app/Controllers/ProdutosController');

const routes = new Router();

routes.post("/api/addProdutos", ProdutosController.add);
routes.get("/", ProdutosController.index);
routes.get("/api/produtos", ProdutosController.show);
routes.delete("/api/produtos-delete/:desc", ProdutosController.delete);
routes.get("/api/produtos-details/:desc", ProdutosController.details);
routes.put("/api/produtos-update/:desc", ProdutosController.update);


module.exports = routes;