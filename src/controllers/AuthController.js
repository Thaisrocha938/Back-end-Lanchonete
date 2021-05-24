const User = require("../model/User");
const jwt =require('jsonwebtoken');
const AuthConfig = require('../config/auth');

module.exports = {
    async createAuth(req, res){
        const { email, password } =req.body;
        const user = await User.findOne({where: { email }});
        
        try{
            if(!user){
                return res.status(401).json({error: 'Usuário não encontrado'});
            }
            if(!(await user.checkPassword(password))){
                return res.status(401).json({error: 'Senha incorreta!'});
            }
            else{
                const { id, name } = user;
                return res.json({
                    user:{id, name, email},
                    token: jwt.sign({ id }, AuthConfig.secret, {expiresIn: AuthConfig.expiresIn})
                });
            }
        }
        catch(err){
            throw res.status(500).json(err);
        }
    }
}