const express= require ('express');
const ProductController= require('./controllers/ProductController');
const UserController= require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const AuthMiddleware = require('./middlewares/AuthMiddleware');





const routes = express.Router();

routes.post('/auth', AuthController.createAuth );
routes.post('/users', UserController.createUser );
routes.get('/user', UserController.listUser);
routes.get('/produto', ProductController.listProduto);
routes.post('/produto', ProductController.createProduto);
routes.put('/produto/:id_produto', ProductController.updateProduto);
routes.delete('/produto/:id_produto', ProductController.deleteProduto);
routes.use(AuthMiddleware);


module.exports= routes;