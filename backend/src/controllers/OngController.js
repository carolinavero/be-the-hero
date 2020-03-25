const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        // conexao com o bd 
        await connection('ongs').insert({ //aguarda finalizar pra continuar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id }); //retorna um objeto
    }
}