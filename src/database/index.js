const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../model/User');
const Produto = require('../model/Produto');
const Endereco = require('../model/Endereco');

const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);
Endereco.associate(connection.models);
Produto.init(connection);

module.exports = connection;