const database = require("../database/connection");

class userController {

    create(request, response) {
        const { name, role, department } = request.body
        database("users")
            .insert({ name, role, department })
            .then(result => {
                response.json(result)
            })
    }

    getAll(request, response) {
        database({
                users: "users",
                departments: "departments",
                roles: "roles",
                cost_centers: "cost_centers"
            })
            .select(
                "departments.id as id_department",
                "departments.department",
                "roles.id as id_role",
                "roles.role",
                "users.id as id",
                "users.name",
                "cost_centers.id as id_cost_centers",
                "cost_centers.cost_center"
            )
            .whereRaw("?? = ?? and ?? = ?? and ?? = ??", [
                "users.department",
                "departments.id",
                "users.role",
                "roles.id",
                "departments.cost_center",
                "cost_centers.id"
            ])
            .then(result => {
                response.json(result)
            })
    }

    getByDepartment(request, response) {
        const department = request.params.id

        database({ users: "users", departments: "departments", roles: "roles", cost_centers: "cost_centers" })
            .select(
                "departments.id as id_department",
                "departments.department",
                "roles.id as id_role",
                "roles.role",
                "users.id as id",
                "users.name",
                "cost_centers.id as id_cost_centers",
                "cost_centers.cost_center",
            )
            .whereRaw(`?? = ?? and ?? = ?? and ?? = ?? and ?? = ${department}`, [
                "users.department",
                "departments.id",
                "users.role",
                "roles.id",
                "departments.cost_center",
                "cost_centers.id",
                "departments.id"
                //department
            ]).then(result => [
                response.json(result)
            ])
    }

    getOne(request, response) {
        const id = request.params.id
        database({
                users: "users",
                departments: "departments",
                roles: "roles",
                cost_centers: "cost_centers"
            })
            .select(
                "departments.id as id_department",
                "departments.department",
                "roles.id as id_role",
                "roles.role",
                "users.id as id",
                "users.name",
                "cost_centers.id as id_cost_centers",
                "cost_centers.cost_center",
            )
            .whereRaw(`?? = ?? and ?? = ?? and ?? = ?? and ?? = ${id}`, [
                "users.department",
                "departments.id",
                "users.role",
                "roles.id",
                "departments.cost_center",
                "cost_centers.id",
                "users.id"
                //id
            ])
            .then(result => {
                response.json(result)
            })
    }

    delete(request, response) {
        const id = request.params.id
        database
            .del()
            .from("users")
            .where({ id })
            .then(result => {
                response.json(result)
            })
    }

    update(request, response) {
        const id = request.params.id
        const { name, role, department } = request.body
        database("users")
            .where({ id })
            .update({
                name,
                role,
                department
            })
            .then(result => {
                response.json(result)
            })
    }

}

module.exports = new userController();