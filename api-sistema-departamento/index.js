const express = require("express");
const cors = require("cors");
const port = 4003
const router = require("./src/routes/routes");

const app = express();
app.use(cors());
app.use(express.json())
app.use(router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

app.get("/", (request, response) => {
    response.send("Versão 1 da API");
});