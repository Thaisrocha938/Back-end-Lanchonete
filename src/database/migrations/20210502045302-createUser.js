'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password_has: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      sexo: {
        type: Sequelize.ENUM('Masculino', 'Feminino'),
        allowNull: false
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
    await queryInterface.dropTable('users');
    
  }
};
