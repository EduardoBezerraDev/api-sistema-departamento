function userUpdate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const id = document.querySelector("#id").value
    const json = formToJson(form)
    axios.put(`${domain}/users/${id}`, json, header)
        .then(function(response) {
            alert("Usuário atualizado com sucesso")
            getAllUsers()
        })
        .catch(function(error) {
            // handle error
            console.log(error)
        })

}

function userUpdateModal(id) {
    axios.get(`${domain}/users/${id}`, header)
        .then(function(response) {
            response.data.forEach(info => {
                document.querySelector("#id").value = info.id
                document.querySelector("#name").value = info.name

                document.querySelector("#department").innerHTML =
                    `<option value="${info.id_department}" selected>${info.department}</option>`

                document.querySelector("#role").innerHTML =
                    `<option value="${info.id_role}" selected>${info.role}</option>`

            });
        })
        .catch(function(error) {
            console.log(error)
        })
}