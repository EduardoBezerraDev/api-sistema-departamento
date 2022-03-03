function userCreate(form) {
    event.preventDefault()
    const json = formToJson(form)

    axios.post(`${domain}/users`, json, header)
        .then(function(response) {
            alert("Usuário criado com sucesso")
            getAllUsers()
        })
        .catch(function(error) {
            // handle error
            alert(error)
        })

}