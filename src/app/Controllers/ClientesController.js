let db2 = [];

class ClientesController {
    index(req, res) {
        res.json({
            msg: 'OK'
        })
        
    }

    add(req, res) {
        const body = req.body

        if (!body)
            return res.status(400).end()

        db2.push(body)

        return res.status(200).end()
    }

    show(req, res) {
        return res.json(db2)
    }

    details(req, res) {
        const nm = req.params.nm
        const details = db2.filter(db2 => (db2.nome == nm))
        res.json(details)
    }

    delete(req, res) {
        const nm = req.params.nm

        const index = db2.findIndex(db2 => (db2.nome == nm))

        db2.splice(index, 1)

        return res.status(200).end()
    }

    update(req, res) {
        const body = req.body

        const nm = req.params.nm

        const index = db2.findIndex(db2 => (db2.nome == nm))

        db2.splice(index, 1, body)

        return res.status(200).end()
    }
}

module.exports = new ClientesController();
