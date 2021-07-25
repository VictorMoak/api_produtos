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
}

module.exports = new ProdutosController();
