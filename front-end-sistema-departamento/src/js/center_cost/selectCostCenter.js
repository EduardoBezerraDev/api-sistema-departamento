function selectCostCenter(element) {
    element = document.querySelectorAll(element);

    axios.get(`${domain}/cost-centers`, header)
        .then(function(response) {

            let centers = '<option value="" disabled selected>Lista de centros de custos</option>';
            response.data.forEach(info => {
                centers += `<option value="${info.id}">${info.cost_center}</option>`;
            });
            element.forEach(element => {
                element.innerHTML = centers
            });
        })
        .catch(function(error) {
            console.log("erro selectCostCenters")
            alert(error);
        });
}