const connection = require('../database/connection'); //importando a conexão com o Banco de Dados

module.exports = {

    async create(request, response) {
        const { email, password } = request.body;

        const nameUser = await connection('user')
            .where('Email', email)
            .where('Password', password)
            .select('Nome')
            .first();

        if (!nameUser) {
            return response.status(400).json({ Erro: 'No User found with this data' });
        }

        return response.json({ nameUser });
    }
};