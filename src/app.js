const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());

        this.app.use((req, res, next) => {
            // res.header("Access-ControllerAllow-Origin", "*");
            //res.header("Access-ControllerAllow-Methods", "Get, POST, PUT, DELETE");
            //res.header("Access-ControllerAllow-Headers", "Access, Content-type, Authorization, Acept, Orin, X-Requested-With")

            this.app.use(cors());
            next();
        })
    }

    routes() {
        this.app.use(routes);
    }
}


module.exports = new App().app;