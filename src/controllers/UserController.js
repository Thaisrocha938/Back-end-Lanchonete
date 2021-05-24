const User = require('../model/User');
const validator = require('fastest-validator');
const v = new validator();
module.exports= {
    async listUser(req, res){
        try{ 
            const user = await User.findAll();
            return res.json(user);
        }
        catch(err){
            throw res.status(500).json(err);
        }
    },
    
    async createUser(req, res){
        try {
            const { name, cpf, email, password_has, sexo } = req.body;  
            const schema = {
                name: { max: 70, min: 4, type: 'string' },
                cpf: { max: 11, min: 11, type: 'string' },
                email: { max: 60, min: 5, type: 'email' },
                password_has: { max: 60, min: 8, type: 'string' },
                sexo: { max: 60, min: 8, type: 'string' }
            };
            const errors = v.validate(req.body, schema);
            if (Array.isArray(errors) && errors.length) {
                return res.status(400).json(errors);
            }
            else{
                const user = await User.findOrCreate({where:{ email }, defaults:{
                name, cpf, email, password_has, sexo
                } } );
                return res.json(user);
            }
        }
        catch(err){
            throw res.status(500).json(err);
        }
    }    
}