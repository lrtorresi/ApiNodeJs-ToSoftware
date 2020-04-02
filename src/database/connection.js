//Arquivo para conectar ao banco de dados (BD utilizado = MySql)

const knex = require('knex');
const configuration = require('../../knexfile');

//Pegando a conexão no bloco de Development
const connection = knex(configuration.development);

//exportando a conexão
module.exports = connection;