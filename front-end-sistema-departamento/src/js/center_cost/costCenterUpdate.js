function costCenterUpdate(form) {
    event.preventDefault()
    const id = document.querySelector("#id").value
    const json = formToJson(form)
    axios.put(`${domain}/cost-centers/${id}`, json, header)
        .then(function(response) {
            alert("Centro de custo atualizado com sucesso")
            getAllCostCenters()
        })
        .catch(function(error) {
            // handle error
            alert(error)
        })
}

function costCenterUpdateModal(id) {
    axios.get(`${domain}/cost-centers/${id}`)
        .then(function(response) {
            response.data.forEach(info => {
                alert(info.id)
                document.querySelector("#id").value = info.id
                document.querySelector("#cost_center").value = info.cost_center
            });
        })
        .catch(function(error) {
            alert(error)
        })
}