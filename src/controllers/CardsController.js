const connection = require('../database/connection'); //importando a conexão com o Banco de Dados



//Funções executadas (chamadas pelas Rotas)
module.exports = {

    //Create Card
    async create(request, response) {
        const { title, description, value, photo } = request.body;
        const user_uuid = request.headers.authorization;

        //Retornar o ID do Card Criado
        const [id] = await connection('Card').insert({
            title, description, value, photo, user_uuid,
        });
        return response.json({ id });
    },

    //Select All Cards
    async getAllCArds(request, response) {
        const cards = await connection('Card').select('*');
        return response.json(cards);
    },

    //Deletar um Card
    async deleteCard(request, response) {
        const { id } = request.params; //recebendo o ID na url
        const user_uuid = request.headers.authorization; //pegando o ID do usuario na Header

        //Verificando se o ID do Card é do usario logado
        const card = await connection('Card')
            .where('id', id)
            .select('user_uuid')
            .first();

        if (card.user_uuid != user_uuid) {
            return response.status(401).json({ error: 'Operação não permitida' });
        }

        await connection('Card').where('id', id).delete();
        return response.status(202).json({msg: 'Card excluido com sucesso!'});
    },

};