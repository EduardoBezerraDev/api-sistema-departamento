function selectRole(element) {
    element = document.querySelectorAll(element);

    axios.get(`${domain}/roles`, header)
        .then(function(response) {
            let roles = '<option value="" disabled selected>Lista de cargos</option>';
            response.data.forEach(info => {
                roles += `<option value="${info.id}">${info.role}</option>`;
            });

            element.forEach(element => {
                element.innerHTML = roles;
            });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
}