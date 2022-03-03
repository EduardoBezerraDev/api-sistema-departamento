const getAllRoles = () => {
    const div = document.querySelector("#role_list")

    axios.get(`${domain}/roles`, header)
        .then(function(response) {
            if (response.data.length < 1) {
                alert("Nenhum cargo encontrado")
            }
            let departments = "";
            response.data.forEach(info => {
                departments += `<tr>
                <td>${info.role}</td>
                <td>
                    <i class="material-icons red-text waves-effect waves-red" onclick = "roleRemove(${info.id})">delete</i>
                </td>
            </tr>`;
            });
            div.innerHTML = departments;
        })
        .catch(function(error) {
            // handle error
            alert(error)
        })

}