function costCenterRemove(id) {

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    if (confirm("Deseja realmente deletar esse centro de custo?")) {
        axios.delete(`${domain}/cost-centers/${id}`, header)
            .then(function(response) {
                Materialize.Toast.removeAll();
                Materialize.toast('Centro de custo removido', 4000, 'red')
                getAllCostCenters()
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
    }
}