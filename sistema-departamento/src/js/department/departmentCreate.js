function departmentCreate(form) {
    event.preventDefault()
    const json = formToJson(form)

    axios.post(`${domain}/departments`, json, header)
        .then(function(response) {
            alert("departamento criado com sucesso")
            getAllDepartments()
        })
        .catch(function(error) {
            alert(error)
        })

}