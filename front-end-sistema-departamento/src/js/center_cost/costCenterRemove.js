function costCenterRemove(id) {
    if (confirm("Deseja realmente deletar esse centro de custo?")) {
        axios.delete(`${domain}/cost-centers/${id}`, header)
            .then(function(response) {
                Materialize.Toast.removeAll();
                Materialize.toast('Centro de custo removido', 4000, 'red')
                getAllCostCenters()
            })
            .catch(function(error) {
                // handle error
                alert(error)
            })
    }
}