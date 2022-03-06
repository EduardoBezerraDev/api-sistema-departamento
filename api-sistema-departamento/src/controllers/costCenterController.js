const database = require("../database/connection");

class costCenterController {
    create(request, response) {
        const { cost_center } = request.body
        database("cost_centers")
            .insert({ cost_center })
            .then(result => {
                response.json(result)
            })
    }
    getAll(request, response) {
        database
            .select("*")
            .from("cost_centers")
            .then(result => {
                response.json(result)
            })
    }
    getOne(request, response) {
        const id = request.params.id
        database
            .select("*")
            .from("cost_centers")
            .where("id", id)
            .then(result => {
                response.json(result)
            })
    }
    delete(request, response) {
        const id = request.params.id
        database
            .del()
            .from("cost_centers")
            .where("id", id)
            .then(result => {
                response.json(result)
            })
    }
    update(request, response) {
        const id = request.params.id
        const { cost_center } = request.body
        database('cost_centers')
            .where("id", id)
            .update({
                cost_center
            })
            .then(result => {
                response.json(result)
            })
    }

}

module.exports = new costCenterController();