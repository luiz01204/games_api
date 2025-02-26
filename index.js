// carregando imports:
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./data/dbConnection");
const gameRouters = require("./routers/gamesRouters");

// criando server:
const app = express();

// conexão com banco:
connection.authenticate().then(() =>{
    console.log("Banco conectado!");
}).catch((error) =>{
    console.log("Erro ao se conectar " + error);
})

// configurando body Parser:
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// rotas da aplicação:
app.use("/api",gameRouters);

// passando porta do server:
app.listen(3001,() =>{
    console.log(`Servidor rodando em: http://localhost:3001`);
});