let db = [];

class ProdutosController {
    index(req, res) {
        res.json({
            msg: 'OK'
        })
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
