const express= require ('express');
const UserController= require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const AuthMiddleware = require('./middlewares/AuthMiddleware');

const routes = express.Router();

routes.post('/auth', AuthController.createAuth );
routes.get('/users', UserController.listUser);
routes.post('/users', UserController.createUser );
routes.use(AuthMiddleware);



module.exports= routes;