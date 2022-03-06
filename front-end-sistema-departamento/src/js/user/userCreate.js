function userCreate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const json = formToJson(form)

    axios.post(`${domain}/users`, json, header)
        .then(function(response) {
            alert("Usuário criado com sucesso")
            getAllUsers()
        })
        .catch(function(error) {
            // handle error
            console.log(error)
        })

}