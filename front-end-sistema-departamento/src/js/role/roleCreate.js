function roleCreate(form) {
    event.preventDefault()
    const json = formToJson(form)

    axios.post(`${domain}/roles`, json, header)
        .then(function(response) {
            alert("Cargo criado com sucesso")
            getAllRoles()
        })
        .catch(function(error) {
            alert(error)
        })

}