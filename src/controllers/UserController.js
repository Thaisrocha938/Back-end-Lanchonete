const User = require('../model/User');


module.exports= {

    async listUser(req, res){
        const user = await User.findAll();
        
        return res.json(user);
    },
    
    async createUser(req, res){
        const { name, cpf, email, password, sexo } = req.body;
        const user = await User.create({ name: name, cpf: cpf, email: email, password: password, sexo: sexo });
        
        return res.json(user);
    }    
}