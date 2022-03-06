function roleCreate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const json = formToJson(form)

    axios.post(`${domain}/roles`, json, header)
        .then(function(response) {
            alert("Cargo criado com sucesso")
            getAllRoles()
        })
        .catch(function(error) {
            console.log(error)
        })

}