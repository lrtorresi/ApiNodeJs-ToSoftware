const express = require('express');
const app = express();
const routes = require('./routes'); //importando as rotas

//Para aceitar Request do tipo JSON
app.use(express.json());
app.use(routes);


app.listen(3333);