function departmentUpdate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const id = document.querySelector("#id").value
    const json = formToJson(form)
    axios.put(`${domain}/departments/${id}`, json, header)
        .then(function(response) {
            alert("Departamento atualizado com sucesso")
            getAllDepartments()
        })
        .catch(function(error) {
            // handle error
            console.log(error)
        })
}

function departmentUpdateModal(id) {
    axios.get(`${domain}/departments/${id}`, header)
        .then(function(response) {
            response.data.forEach(info => {
                document.querySelector("#id").value = info.id
                document.querySelector("#department").value = info.department
                document.querySelector("#cost_center").innerHTML =
                    `<option value="${info.id_cost_center}" selected>${info.cost_center}</option>`


            });
        })
        .catch(function(error) {
            console.log(error)
        })
}