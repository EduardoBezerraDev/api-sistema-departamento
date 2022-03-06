function departmentCreate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const json = formToJson(form)

    axios.post(`${domain}/departments`, json, header)
        .then(function(response) {
            alert("departamento criado com sucesso")
            getAllDepartments()
        })
        .catch(function(error) {
            console.log(error)
        })

}