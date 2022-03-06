function login() {
    event.preventDefault()
    const user = document.querySelector("#user").value
    const password = document.querySelector("#password").value

    axios.post(`${domain}/jwt`, { user: user, password: password }, header)
        .then(function(response) {
            localStorage.setItem("token", response.data.token)
            location.href = "src/page/users.html"
        })
        .catch(function(error) {
            // handle error
            alert("Usuário ou senha incorreto")
        })
}

const header = {
    headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
    }
}