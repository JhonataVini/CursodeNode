const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    //Listar
    async index(req, res){

        const logins = await connection('login').select('*');
        

        return res.json(logins);
    },


    // criação dos logins
    async create(req, res) {
        const {name, email, whatsapp} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('login').insert({
            id,
            name,
            email,
            whatsapp,
        })

       return  res.json({ id });
        
    }
}