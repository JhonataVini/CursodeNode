const express = require('express');
const loginController = require('./controllers/loginController');
const UsuarioController = require('./controllers/UsuarioController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//rota de listagem login
routes.get('/login', loginController.index)
//rota de criação login
routes.post('/login', loginController.create);


//listagem de um login com os seus usuarios
routes.get('/profile', ProfileController.index);

//rota de criação usuario
routes.get('/usuario', UsuarioController.list);
routes.get('/usuario/list/:id', UsuarioController.listByid);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:id', UsuarioController.delete);
routes.put('/usuario/:id', UsuarioController.Edit);

// sessão do login
 routes.post('/sessions', SessionController.create);


module.exports = routes;