function filterByCostCenter(department) {

    if (!loginVerification()) {
        alert("Você não está logado")
        window.location.href = "../../index.html"
        return false
    }

    const div = document.querySelector("#department_list");

    axios.get(`${domain}/departments/cost-centers/${department}`, header)
        .then(function(response) {

            if (response.data.length < 1) {
                alert("Nenhum departamento encontrado nesse centro de custo")
            }
            let departments = "";
            response.data.forEach(info => {
                departments += `<tr>
                <td>${info.department}</td>
                <td>${info.cost_center}</td>
                <td>
                    <i class="material-icons red-text waves-effect waves-red" onclick = "departmentRemove(${info.id})">delete</i>
                    <a href = "#modal_update" class = "modal-trigger" onclick = "departmentUpdateModal(${this.id})">
                        <i class="material-icons blue-text waves-effect waves-yellow">update</i>
                    </a>
                </td>
            </tr>`;
            });
            div.innerHTML = departments;
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });

}