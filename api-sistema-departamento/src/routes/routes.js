//const connection = require('../database/connection')
const app = require("@forkjs/group-router");
const jwt = require("jsonwebtoken")
const SECRET = "IAMAPASSWORD" //apenas para fins de explicação. Ideal seria está em uma variável de ambiente

const userController = require("../controllers/userController");
const roleController = require("../controllers/roleController");
const departmentController = require("../controllers/departmentController");
const costCenterController = require("../controllers/costCenterController");
const req = require("express/lib/request");
const res = require("express/lib/response");

//MIDDLEWARE DE VERIFICAÇÃO JWT
function verifyJWT(request, response, next) {
    const token = request.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return response.status(401).end()
        request.userId = decoded.userId
        next()
    })
}

app.group("/ipdvonline/api", function(request, response) {
    //ROTA PARA CRIAÇÃO DE UM TOKEN JWT
    app.post("/jwt", (request, response) => {
        //USUÁRIO E SENHA VERIFICADOS NO "BANCO DE DADOS"
        if (request.body.user == "user" && request.body.password == "123") {
            const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 3600 })
                //TOKEN VALE POR 1 HORA
            return response.json({ auth: true, token })
        }
        //TOKEN INVÁLIDO
        response.status(401).end()
    })

    //user
    app.post("/users/", userController.create, verifyJWT)
    app.get("/users/", userController.getAll, verifyJWT)
    app.get("/users/:id", userController.getOne, verifyJWT)
    app.get("/users/departments/:id", userController.getByDepartment, verifyJWT)
    app.delete("/users/:id", userController.delete, verifyJWT)
    app.put("/users/:id", userController.update, verifyJWT)

    //role
    app.post("/roles/", roleController.create, verifyJWT)
    app.get("/roles/", roleController.getAll, verifyJWT)
    app.get("/roles/:id", roleController.getOne, verifyJWT)
    app.delete("/roles/:id", roleController.delete, verifyJWT)
    app.put("/roles/:id", roleController.update, verifyJWT)

    //department
    app.post("/departments/", departmentController.create, verifyJWT)
    app.get("/departments/", departmentController.getAll, verifyJWT)
    app.get("/departments/:id", departmentController.getOne, verifyJWT)
    app.get("/departments/cost-centers/:id", departmentController.getByCostCenter, verifyJWT)

    app.delete("/departments/:id", departmentController.delete, verifyJWT)
    app.put("/departments/:id", departmentController.update, verifyJWT)

    //cost center
    app.post("/cost-centers/", costCenterController.create, verifyJWT)
    app.get("/cost-centers/", costCenterController.getAll, verifyJWT)
    app.get("/cost-centers/:id", costCenterController.getOne, verifyJWT)
    app.delete("/cost-centers/:id", costCenterController.delete, verifyJWT)
    app.put("/cost-centers/:id", costCenterController.update, verifyJWT)

})

module.exports = app.router;