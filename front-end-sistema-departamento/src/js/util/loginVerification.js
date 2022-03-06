/*Essa verificação em um ambiente real verificaria se o token realmente é desse usuário e se não existe.
Caso não existisse ou fosse um token inválido(Não seja desse cliente, ou esteja corrompido) ele retornairia
para a página de login*/

const loginVerification = () => {
    if (!window.localStorage.getItem("token")) {
        return false
    }
    return true
}