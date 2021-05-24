'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', { 
      id: {
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      allowNull: false
     },
     user_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id'},
      onUpdate:'CASCADE',
      onDelete: 'CASCADE'
     },
      cep:{
       type: Sequelize.STRING,
       allowNull: false

     },
     logradouro: {
       type: Sequelize.STRING,
       allowNull: false
     },
     numero:{
       type: Sequelize.INTEGER,
       allowNull: false
     },
     complemento:{
      type: Sequelize.STRING
    },
     created_at: {
       type: Sequelize.DATE,
       allowNull: false
     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull: false
     } });
 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('enderecos');

  }
};
