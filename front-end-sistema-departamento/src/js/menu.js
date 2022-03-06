const menu = () => {
    const header = document.querySelector("header")
    const menu = `<nav class="blue">
    <div class="nav-wrapper">
        <div class="container">
            <a href="#" class="brand-logo">IPDV Online</a>
            <a href="#" data-activates="mobile-menu" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
<<<<<<< HEAD
                    <li><a href="../page/users.html">Usuários</a></li>
                    <li><a href="../page/roles.html">Cargos</a></li>
                    <li><a href="../page/departments.html">Departamentos</a></li>
                    <li><a href="../page/costCenter.html">Centros de custos</a></li>
=======
                    <li><a href="src/page/users.html">Usuários</a></li>
                    <li><a href="src/page/roles.html">Cargos</a></li>
                    <li><a href="src/page/departments.html">Departamentos</a></li>
                    <li><a href="src/page/costCenter.html">Centros de custos</a></li>
>>>>>>> 27c592cc959363f549832ca43e08fee1c1fc1c5f
            </ul>
            <ul class="side-nav" id="mobile-menu">
                <li>
                    <div class="userView">
                        <div class="background cyan">

                        </div>
                        <a href="#!name"><span class="white-text name">Eduardo Bezerra</span></a>
                        <a href="#!email"><span class="white-text email">profissional.edu.teixeira@gmail.com</span></a>
                    </div>
                </li>
<<<<<<< HEAD
                <li><a href="../page/users.html">Usuários</a></li>
                <li><a href="../page/roles.html">Cargos</a></li>
                <li><a href="../page/departments.html">Departamentos</a></li>
                <li><a href="../page/costCenter.html">Centros de custos</a></li>
=======
                <li><a href="src/page/users.html">Usuários</a></li>
                <li><a href="src/page/roles.html">Cargos</a></li>
                <li><a href="src/page/departments.html">Departamentos</a></li>
                <li><a href="src/page/costCenter.html">Centros de custos</a></li>
>>>>>>> 27c592cc959363f549832ca43e08fee1c1fc1c5f
            </ul>
        </div>
    </div>
</nav>`
    header.innerHTML = menu
}
