const getAllCostCenters = () => {
    const div = document.querySelector("#cost_center_list")

    axios.get(`${domain}/cost-centers`, header)
        .then(function(response) {

            if (response.data.length < 1) {
                alert("Nenhum centro de custo encontrado")
            }
            let users = ""
            response.data.forEach(info => {
                users += `<tr>
                <td>${info.cost_center}</td>
                <td>
                    <i class="material-icons red-text waves-effect waves-red" onclick = "costCenterRemove(${info.id})">delete</i>
                    <a href = "#modal_update" class = "modal-trigger" onclick = "costCenterUpdateModal(${info.id})">
                        <i class="material-icons blue-text waves-effect waves-yellow">update</i>
                    </a>
                </td>
            </tr>`
            });
            div.innerHTML = users
        })
        .catch(function(error) {
            // handle error
            alert(error)
        })

}