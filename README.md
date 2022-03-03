
# Sistema de  gerenciamento de departamento

Sistema cujo objetivo é gerenciar pequenos e médios departamentos através do seu celular

### Observações
O sistema foi pensado para ser utilizado como aplicativo, sendo assim, arquitetado para smartphones.

## 🔧 Funçoes

### Módulo de usuários:
- Criar
- Atualizar
- Deletar
- listar
- listar por departamento

### Módulo de centro de custo:
- Criar
- Atualizar
- Deletar
- listar

### Módulo de departamento:
- Criar
- Atualizar
- Deletar
- listar usuários
- listar por centro de custo

### Módulo de cargo:
- Criar
- listar
- deletar

## Feito Com:
  ### Front-end:
  - Javascript (VanillaJS, Jquery)
  - CSS (materialize, que se baseia no material design)
  - HTMl 5
  - Axios (para requisições a API)
  ### Back-end:
  - NodeJs v14.17.6
  - Express
  - knex (como queryBuilder)
  - Postgresql V14 (como banco de dados)
  - jsonwebtoken (Para token de sessão)
  ## Gerenciamento de pacotes:
  - NPM V6.14.15
 
 ### Como utilizar:
 - Faça um clone do projeto
 - Através do Pgadmin restaure o banco de dados "banco.sql"
 - Navegue até a pasta api-sistema-departamento
 - Digite npm install no terminal
 - Execute o projeto utilizando npm start no terminal
 - Pronto. A api está em execução
 - Para visualizar o front end, navegue até a pasta front-end-sistema-departamento
 - altere o domínio (caso a api não esteja em localhost) no arquivo "domain" na pasta "src/js/const/domain.js"
 - Abra o arquivo index.html com o navegador
 - Utilize CTRL + I para ver a versão mobile, no qual o projeto foi pensado
 
### Contato

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eduardo-bezerra-78957216b/)

<p align="center">Copyright © 2022 EduardoBezerraDev</p>
