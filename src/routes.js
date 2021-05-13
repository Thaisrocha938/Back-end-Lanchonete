const express= require ('express');
const UserController= require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const AuthMiddleware = require('./middlewares/AuthMiddleware');

const routes = express.Router();

routes.post('/auth', AuthController.createAuth );
routes.post('/users', UserController.createUser );
routes.get('/users', UserController.listUser);
routes.use(AuthMiddleware);



module.exports= routes;