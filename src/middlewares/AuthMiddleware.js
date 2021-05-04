const jwt = require('jsonwebtoken');
const AuthConfig = require('../config/auth');
const { promisify } = require('util');


module.exports = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({error: "token não fonecido!"});
    }
    console.log(authHeader);

    const [, token] = authHeader.split(' ')
    try {
        const tokenDeconded = await promisify(jwt.verify)(token, AuthConfig.secret);
        req.id = tokenDeconded.id

        return next();
    } catch (error) {
        return res.status(401).json({error: "token invalido"});
    }

}