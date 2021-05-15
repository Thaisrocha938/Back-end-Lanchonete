'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('produtos', { 
     id: {
       type:Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement: true,
       allowNull: false
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false

      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      descricao:{
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('produtos');
  }
};
