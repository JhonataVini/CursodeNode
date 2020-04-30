const connection = require('../database/connection');
module.exports = {

    async index(req, res) {
        const login_id = req.headers.authorization;

        const usuarios = await connection('usuario')
        .where('login_id', login_id)
        .select('*');

        return res.json(usuarios);
    }
}