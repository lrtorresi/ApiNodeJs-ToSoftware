const connection = require('../database/connection'); //importando a conexão com o Banco de Dados
const { uuid } = require('uuidv4'); // Criar Guid

//Funções executadas (chamadas pelas Rotas)
module.exports = {


    //Create User
    async create(request, response) {
        const Uuid = uuid();
        const { Nome, Cpf, Email, Password } = request.body;

        //Verificando se o e-mail já esta cadastrado
        const emailUser = await connection('User')
            .where('Email', Email)
            .orWhere('Cpf', Cpf)
            .select('Nome')
            .first();

        if (emailUser != null) {
            return response.status(401).json({ error: 'Operação não permitida! Usuario já cadastrados.' });
        }
        //usuario não encontrado e vai cadastrar
        await connection('User').insert({
            Uuid, Nome, Cpf, Email, Password,
        })
        return response.json({ Uuid, Nome, Cpf });
    },

    //Select All User
    async getAllUser(request, response) {
        const users = await connection('User').select('*');
        return response.json(users);
    },
};

