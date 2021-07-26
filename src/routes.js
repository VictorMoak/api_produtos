const { Router } = require('express');

const ProdutosController = require('./app/Controllers/ProdutosController');

const ClientesController = require('./app/Controllers/ClientesController');

const routes = new Router();

//rotas de produtos
routes.get("/", ProdutosController.index);
routes.post("/api/addProdutos", ProdutosController.add);
routes.get("/api/produtos", ProdutosController.show);
routes.delete("/api/produtos-delete/:desc", ProdutosController.delete);
routes.get("/api/produtos-details/:desc", ProdutosController.details);
routes.put("/api/produtos-update/:desc", ProdutosController.update);

//rotas de clientes
routes.post("/api/addclientes", ClientesController.add);
routes.get("/api/clientes", ClientesController.show);
routes.delete("/api/clientes-delete/:nm", ClientesController.delete);
routes.get("/api/clientes-details/:nm", ClientesController.details);
routes.put("/api/clientes-update/:nm", ClientesController.update);


module.exports = routes;