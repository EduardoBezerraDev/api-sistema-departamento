const selectDepartment = (element) => {
    element = document.querySelectorAll(element)
    axios.get(`${domain}/departments`, header)
        .then(function(response) {
            let departments = '<option value="" disabled selected>Lista de departamentos</option>'
            response.data.forEach(info => {
                departments += `<option value="${info.id}">${info.department}</option>`
            });

            element.forEach(element => {
                element.innerHTML = departments
            });
        })
        .catch(function(error) {

            console.log(error)
        })
}