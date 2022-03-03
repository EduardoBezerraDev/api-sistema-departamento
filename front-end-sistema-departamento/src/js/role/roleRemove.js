function roleRemove(id) {
    if (confirm("Deseja realmente deletar esse cargo?")) {
        axios.delete(`${domain}/roles/${id}`, header)
            .then(function(response) {
                Materialize.Toast.removeAll();
                Materialize.toast('Cargo removido', 4000, 'red')
                getAllRoles()
            })
            .catch(function(error) {
                // handle error
                alert(error)
            })
    }
}