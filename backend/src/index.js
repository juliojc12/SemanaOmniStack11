const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rota /Recurso
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar/listar uma informção do back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar um informção no back-end
  * DELETE: Deletar um informção no back-end
  */

  /**
   * Tipos de parâmentros:
   * 
   * Query Params: Parâmentros nomeados enviados na roda após "?" (filtros, paginação)
   * Route Params: Parâmentros ultilizados para identificar recursos.
   * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos.
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB...
    */


     





