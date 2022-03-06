function userRemove(id) {
    if (confirm("Deseja realmente deletar esse usuário?")) {
        if (!loginVerification()) {
            alert("Você não está logado")
            window.location.href = "../../index.html"
            return false
        }

        axios.delete(`${domain}/users/${id}`, header)
            .then(function(response) {
                Materialize.Toast.removeAll();
                Materialize.toast('Usuário removido', 4000, 'red')
                getAllUsers()
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
    }
}