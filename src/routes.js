const express = require('express'); //importanto o express
const routes = express.Router();
const UserController = require('./controllers/UserController');
const CardController = require('./controllers/CardsController');
const SessionController = require('./controllers/SessionController');




//Rota para verificar se o usario pode auntenticar
routes.post('/session', SessionController.create);


//Rota para Criar usuario (create User)
routes.post('/user', UserController.create);

//Rota para listar os usuarios (Select All User)
routes.get('/user', UserController.getAllUser);


//Rota para criar Cars
routes.post('/card', CardController.create);

//Rota para listar os Cards
routes.get('/card', CardController.getAllCArds);

//Rota para delete um card
routes.delete('/card/:id', CardController.deleteCard);






//Exportando as Rotas
module.exports = routes;