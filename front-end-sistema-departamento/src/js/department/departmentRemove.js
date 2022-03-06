function departmentRemove(id) {

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    if (confirm("Deseja realmente deletar esse departamento?")) {
        axios.delete(`${domain}/departments/${id}`, header)
            .then(function(response) {
                Materialize.Toast.removeAll();
                Materialize.toast('Departamento removido', 4000, 'red')
                getAllDepartments()
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
    }
}