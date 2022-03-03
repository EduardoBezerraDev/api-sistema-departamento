function departmentUpdate(form) {
    event.preventDefault()
    const id = document.querySelector("#id").value
    const json = formToJson(form)
    axios.put(`${domain}/departments/${id}`, json, header)
        .then(function(response) {
            alert("Departamento atualizado com sucesso")
            getAllDepartments()
        })
        .catch(function(error) {
            // handle error
            alert(error)
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
            alert(error)
        })
}