function costCenterUpdate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }
    const id = document.querySelector("#id").value
    const json = formToJson(form)

    axios.put(`${domain}/cost-centers/${id}`, json, header)
        .then(function(response) {
            alert("Centro de custo atualizado com sucesso")
            getAllCostCenters()
        })
        .catch(function(error) {
            // handle error
            console.log(error)
        })
}

function costCenterUpdateModal(id) {
    axios.get(`${domain}/cost-centers/${id}`, header)
        .then(function(response) {
            response.data.forEach(info => {
                document.querySelector("#id").value = info.id
                document.querySelector("#cost_center").value = info.cost_center
            });
        })
        .catch(function(error) {
            console.log(error)
        })
}