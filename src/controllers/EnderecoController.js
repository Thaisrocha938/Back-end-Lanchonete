const User = require('../model/User');
const Endereco = require('../model/Endereco');

module.exports = {
    async listEndereco(req, res){
        try{
            const { user_id } = req.params;
            const user = await User.findByPk(user_id);

            if (!user) {
                return res.status(400).json({ erro: 'usuario não encontrado'})   
            }
            else{
            const endereco = await Endereco.findAll({where: {user_id:user_id}});
            return res.json(endereco);
            }
        } 
        catch(err){
            throw res.status(500).json(err);
        }
    },

    async criarEndereco (req, res){
        try{  
            const { user_id } = req.params;
            const { cep, logradouro, numero, complemento } = req.body;

            const user = await User.findByPk(user_id);

            if(!user){
                return res.status(400).json({ erro: 'usuario não encontrado'})
            }
            const endereco = await Endereco.create({
                cep,
                logradouro,
                numero, 
                complemento,
                user_id
            }) 
            res.json(endereco);
        }
        catch(err){
            throw res.status(500).json(err);
        }
    },

    async updateEndereco(req, res){
      try{
            const { user_id, id_endereco }= req.params;
            const user = await User.findByPk(user_id);

            if(!user){
                return res.status(400).json({ erro: 'usuario não encontrado'})
            }
            const endereco = await Endereco.update(req.body, {where: {id: id_endereco}});
            return res.json(endereco);
        }
        catch(err){
            throw res.status(500).json(err);
        }
    },

    async deleteEndereco(req, res){
        try{
            const { user_id, id_endereco } = req.params

            const user = await User.findByPk(user_id);
            if (!user) {
                return res.status(400).json({ erro: 'usuario não encontrado'})
            }
            const endereco  = await Endereco.findOne({where: {id: id_endereco}})
            await endereco.destroy(endereco)
            return res.json();
        }
        catch(err){
            throw res.status(500).json(err);
        }
    }
};