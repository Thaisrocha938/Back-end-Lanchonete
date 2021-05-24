const express= require ('express');
const ProductController= require('./controllers/ProductController');
const UserController= require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const AuthMiddleware = require('./middlewares/AuthMiddleware');
const EnderecoController = require('./controllers/EnderecoController');




const routes = express.Router();
//Autenticação
routes.post('/auth', AuthController.createAuth );
//cadastro e lista de usuario
routes.post('/users', UserController.createUser );
routes.get('/user', UserController.listUser);
//endereço
routes.get('/users/:user_id/endereco', EnderecoController.listEndereco);
routes.post('/users/:user_id/endereco', EnderecoController.criarEndereco);
routes.put('/users/:user_id/endereco/:id_endereco', EnderecoController.updateEndereco);
routes.delete('/users/:user_id/endereco/:id_endereco', EnderecoController.deleteEndereco);
//criar, listar, atualizar e deletar
routes.get('/produto', ProductController.listProduto);
routes.post('/produto', ProductController.createProduto);
routes.put('/produto/:id_produto', ProductController.updateProduto);
routes.delete('/produto/:id_produto', ProductController.deleteProduto);

routes.use(AuthMiddleware);


module.exports= routes;