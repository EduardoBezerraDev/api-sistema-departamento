function userRemove(id) {
    if (confirm("Deseja realmente deletar esse usuário?")) {
        axios.delete(`${domain}/users/${id}`, header)
            .then(function(response) {

                Materialize.Toast.removeAll();
                Materialize.toast('Usuário removido', 4000, 'red')
                getAllUsers()
            })
            .catch(function(error) {
                // handle error
                alert(error)
            })
    }
}