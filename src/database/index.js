const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../model/User');
const Produto = require('../model/Produto');

const connection = new Sequelize(dbConfig);

User.init(connection);
Produto.init(connection);

module.exports = connection;