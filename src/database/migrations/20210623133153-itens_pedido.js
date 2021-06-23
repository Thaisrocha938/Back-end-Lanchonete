'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itens_pedidos', { 
      id: {
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      allowNull: false
     },
     pedido_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'pedidos', key: 'id'},
      onUpdate:'CASCADE',
      onDelete: 'CASCADE'
     },
     produto_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'produtos', key: 'id'},
      onUpdate:'CASCADE',
      onDelete: 'CASCADE'
     },
     quatidade:{
      type: Sequelize.INTEGER,
      allowNull: false
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
     await queryInterface.dropTable('itens_pedidos');

  }
};

