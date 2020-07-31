const connection = require('../database/connection');

module.exports = {
    //Listar usuario
    async listByid(req, res){
        const { id } = req.params;

        const usuarios = await connection('usuario')
        .where('id', id)
        .select('*');
        return res.json(usuarios);
    },


    //Listar usuario
    async list(req, res){
        const { page = 1 } = req.query;

        const [count] = await connection('usuario').count();
        console.log(count);

        const usuarios = await connection('usuario')
        .join('login', 'login_id', '=', 'usuario.login_id')
        .limit(100) 
        .offset((page -1) * 43)
        .select([
            'usuario.*', 
            'login.name', 
            'login.whatsapp'
        ]);

        res.header('X-Total-Count', count['count']);
    
        return res.json(usuarios);
    },

    //Criar usuario
    async create(req, res) {
        const {nome, numero, numchip, dtexp, dtpag, status} = req.body;
        const login_id = req.headers.authorization;

      const {id} = await connection('usuario').insert({
          nome,
          numero,
          numchip,
          dtexp,
          dtpag,
          status,
          login_id  
        });
        return res.json({ id });
    },
    //deletar usuario
    async delete(req, res){
        const { id } = req.params;
        const login_id = req.headers.authorization;

        const usuario = await connection('usuario')
        .where('id', id)
        .select('login_id')
        .first();

        if(usuario.login_id != login_id) {
            return res.status(401).json({ error: 'Operation not permitted'});
        }
        await connection('usuario').where('id', id).delete();

     return res.status(204).send();
    },

    //Editar
    async Edit(req, res) {
        const { id } = req.params;
        const {nome, numero, numchip, dtexp, dtpag, status} = req.body;

        const login_id = req.headers.authorization;

        const usuario = await connection('usuario')
        .where('id', id)
        .select('login_id')
        .first();

        if(usuario.login_id != login_id) {
            return res.status(401).json({ error: 'Operation not permitted'});
        }
        await connection('usuario').where('id', id).update({
            nome,
            numero,
            numchip,
            dtexp,
            dtpag,
            status,
            login_id  
          });

     return res.status(204).send();
    }

}