function costCenterCreate(form) {
    event.preventDefault()

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const json = formToJson(form)

    axios.post(`${domain}/cost-centers`, json, header)
        .then(function(response) {
            alert("Centro de custos criado com sucesso")
            getAllCostCenters()
        })
        .catch(function(error) {
            console.log(error)
        })

}