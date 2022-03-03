const header = {
    headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
    }
}

function headers() {
    //USUÁRIO E SENHA SERIAM CAPTURADOS POR UMA TELA DE LOGIN
    axios.post(`${domain}/jwt`, { user: 'user', password: "123" }, header)
        .then(function(response) {
            localStorage.setItem("token", response.data.token)
        })
        .catch(function(error) {
            // handle error
            alert(error)
        })

}