const connection = require('../database/connection'); //importando a conexão com o Banco de Dados
const { uuid } = require('uuidv4'); // Criar Guid

//Funções executadas (chamadas pelas Rotas)
module.exports = {

    //Create User
    async create(request, response) {
        const Uuid = uuid();
        const { Nome, Cpf, Email, Password } = request.body;

        await connection('user').insert({
            Uuid, Nome, Cpf, Email, Password,
        })
        return response.json({ Uuid, Nome, Cpf });
    },


    //Select All User
    async getAllUser(request, response) {
        const users = await connection('user').select('*');
        return response.json(users);
    },
};

