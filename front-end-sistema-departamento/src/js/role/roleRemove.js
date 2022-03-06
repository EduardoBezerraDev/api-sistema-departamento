function roleRemove(id) {

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    if (confirm("Deseja realmente deletar esse cargo?")) {
        axios.delete(`${domain}/roles/${id}`, header)
            .then(function(response) {
                Materialize.Toast.removeAll();
                Materialize.toast('Cargo removido', 4000, 'red')
                getAllRoles()
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
    }
}