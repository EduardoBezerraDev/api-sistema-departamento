const database = require("../database/connection");

class roleController {
    create(request, response) {
        const { role } = request.body
        database("roles")
            .insert({ role })
            .then(result => {
                response.json(result)
            })
    }
    getAll(request, response) {
        database
            .select("*")
            .from("roles")
            .then(result => {
                response.json(result)
            })
    }
    getOne(request, response) {
        const id = request.params.id
        database
            .select("*")
            .from("roles")
            .where("id", id)
            .then(result => {
                response.json(result)
            })
    }
    delete(request, response) {
        const id = request.params.id
        database
            .del()
            .from("roles")
            .where({ id })
            .then(result => {
                response.json(result)
            })
    }
    update(request, response) {
        const id = request.params.id
        const { role } = request.body
        database('roles')
            .where("id", id)
            .update({
                role
            })
            .then(result => {
                response.json(result)
            })
    }

}

module.exports = new roleController();