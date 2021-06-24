const Pedido = require("../model/Pedido");
const User = require("../model/User");

module.exports ={
    async listPedidos(req, res){
        try{
            const { user_id } = req.params;
            const user = await User.findByPk(user_id, {include:{
                association:'pedidos'
            }});

            if (!user) {
                return res.status(400).json({ erro: 'usuario não encontrado'})   
            }
            else{
                return res.json(user);
            }
        } 
        catch(err){
            throw res.status(500).json(err);
        }
    },
    async criarPedido (req, res){
        try{  
            const { user_id } = req.params;

            const user = await User.findByPk(user_id);

            if(!user){
                return res.status(400).json({ erro: 'usuario não encontrado'})
            }else{
                const pedido = await Pedido.create({user_id}) 
                return res.json(pedido);
            }
        }
        catch(err){
            throw res.status(500).json(err);
        }
    },
}