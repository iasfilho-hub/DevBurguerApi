'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {   
     await queryInterface.createTable('users', { 
      name: {
        type: Sequelize.STRING,
        allowNull: false  // ✅ CORRIGIDO: era "allowNul"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }

   
    });     
  },

  async down (queryInterface,) {   
     await queryInterface.dropTable('users');
     
  }
};
