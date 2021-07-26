let db = [];

class ProdutosController {
    index(req, res) {      
        res.json([{
            Rota: "Produtos",
            get: "/",
            get: "/api/produtos",
            get: "/api/produtos-details/:desc",
            post: "api/addProdutos",
            delete: "/api/produtos-delete/:desc",
            put: "/api/produtos-update/:desc"
        },
        {
            Rota: "Clientes",
            get: "/",
            get: "/api/clientes",
            get: "/api/clientes-details/:nm",
            post: "api/addclientes",
            delete: "/api/clientes-delete/:nm",
            put: "/api/clientes-update/:nm"
        }])
    }
    add(req, res) {
        const body = req.body

        if (!body)
            return res.status(400).end()

        db.push(body)

        return res.status(200).end()
    }

    show(req, res) {
        return res.json(db)
    }

    details(req, res) {
        const desc = req.params.desc
        const details = db.filter(db => (db.descricao == desc))
        res.json(details)
    }

    delete(req, res) {
        const desc = req.params.desc

        const index = db.findIndex(db => (db.descricao == desc))

        db.splice(index, 1)

        return res.status(200).end()
    }

    update(req, res) {
        const body = req.body

        const desc = req.params.desc

        const index = db.findIndex(db => (db.descricao == desc))

        db.splice(index, 1, body)

        return res.status(200).end()
    }
}

module.exports = new ProdutosController();
