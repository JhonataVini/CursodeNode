const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const { id } = req.body;

        const login = await connection('login')
        .where('id', id)
        .select('name')
        .first();

        if (!login) {
            return res.status(400).json({ error: 'No login found with this ID' });
        }
        return res.json(login);
    }
}