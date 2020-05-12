const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota e recursos
 */

 /**
 * Metodos HTTP:
 * 
 * GET: buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipos de paramentros
 * 
 * Query Params: Paramentros nomeados enviados na rota apos o "?" (filtros e paginação)
 * Route Params: Paramestros utilizados para indentificar recursos
 * Request Body: Corpo da requisição, é utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB
  */

app.listen(3333, '104.210.223.168' );
