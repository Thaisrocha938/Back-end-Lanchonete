const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../model/User');
const Produto = require('../model/Produto');
const Endereco = require('../model/Endereco');
const Pedido = require('../model/Pedido');

const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);
Produto.init(connection);
Pedido.init(connection);

User.associate(connection.models);
Endereco.associate(connection.models);
Pedido.associate(connection.models);

module.exports = connection;