const Produto = require('../model/Produto');
const validator = require('fastest-validator');
const v = new validator();
module.exports= {
    async listProduto(req, res){
        try{
            const produto = await Produto.findAll();
            return res.json(produto);
        }
        catch(err){
            throw res.status(500).json(err);
        }
    },

    async createProduto(req, res){
       try{
            const { nome, preco, descricao } = req.body; 
            const schema = {
                nome: {max:100, min:1, type: 'string'},
                preco:{ type:'number', positive : true },
                descricao: {type:'string'}
            };
            const errors = v.validate(req.body, schema);
            if (Array.isArray(errors) && errors.length) {
                return res.status(400).json(errors);
            }else{
                const produto = await Produto.findOrCreate({where:{ nome }, defaults:{ nome, preco, descricao}});
                return res.json(produto);
            }
       }
       catch(err){
            throw res.status(500).json(err);
       }
    },

    async updateProduto(req, res){
        try { 
            const { id_produto } = req.params;
            console.log(id_produto);
            const confere = await Produto.findByPk(id_produto);
            if (!confere) {
                return res.status(400).json({erro: "produto não existe"});
            }
            else{
                const produto = await Produto.update(req.body, {where: {id: id_produto}});
                return res.json(produto);
            }
        }
        catch(err){
            throw res.status(500).json(err);
        }
    },

    async deleteProduto(req, res){
        try {
            const { id_produto } = req.params;
            const produto = await Produto.findOne({where: {id: id_produto}});
            if (!produto) {
                return res.status(401).json({erro:"produto não existente"});
            }
            else{
                await produto.destroy(produto);
                return res.json();
            }
        }
        catch(err){
            throw res.status(500).json(err);
        }
    }

}
