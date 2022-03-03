function costCenterCreate(form) {
    event.preventDefault()
    const json = formToJson(form)

    axios.post(`${domain}/cost-centers`, json, header)
        .then(function(response) {
            alert("Centro de custos criado com sucesso")
            getAllCostCenters()
        })
        .catch(function(error) {
            alert(error)
        })

}