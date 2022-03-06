const database = require("../database/connection");

class departmentController {
    create(request, response) {
        const {
            department,
            cost_center
        } = request.body

        database("departments")
            .insert({
                department,
                cost_center
            })
            .then(result => {
                response.json(result)
            })
    }
    getAll(request, response) {
        database({
                departments: "departments",
                cost_centers: "cost_centers"
            })
            .select(
                "cost_centers.id as id_cost_center",
                "cost_centers.cost_center",
                "departments.id",
                "departments.department"
            )
            .whereRaw("?? = ??", [
                "departments.cost_center",
                "cost_centers.id"
            ])
            .then(result => {
                response.json(result)
            })
    }
    getOne(request, response) {
        const id = request.params.id
        database({
                departments: "departments",
                cost_centers: "cost_centers"
            })
            .select(
                "cost_centers.id as id_cost_center",
                "cost_centers.cost_center",
                "departments.id",
                "departments.department"
            )
            .whereRaw(`?? = ?? and ?? = ${id}`, [
                "departments.cost_center",
                "cost_centers.id",
                "departments.id"
            ])
            .then(result => {
                response.json(result)
            })
    }
    getByCostCenter(request, response) {
        const cost_center = request.params.id
        database({
                departments: "departments",
                cost_centers: "cost_centers"
            })
            .select(
                "cost_centers.id as id_cost_center",
                "cost_centers.cost_center",
                "departments.id",
                "departments.department"
            )
            .whereRaw(`?? = ?? and ?? = ${cost_center}`, [
                "departments.cost_center",
                "cost_centers.id",
                "cost_centers.id"
            ])
            .then(result => {
                response.json(result)
            })
    }
    delete(request, response) {
        const id = request.params.id
        database
            .del()
            .from("departments")
            .where("id", id)
            .then(result => {
                response.json(result)
            })
    }
    update(request, response) {
        console.log(request.body)
        const id = request.params.id
        const {
            department,
            cost_center
        } = request.body

        database('departments')
            .where("id", id)
            .update({
                department,
                cost_center
            })
            .then(result => {
                response.json(result)
            })
    }

}

module.exports = new departmentController();