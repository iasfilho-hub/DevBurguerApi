'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {   
     await queryInterface.createTable('users', { 
      id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true,
        defaultValue: Sequelize.UUIDV4				
			},   
      
      name: {
        type: Sequelize.STRING,
        allowNul: false
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
        defaultValue: false
      },
      created_at: {
				type: Sequelize.DATE(),
				allowNull: false,
			},
			update_at: {
				type: Sequelize.DATE(),
				allowNull: false,
			},
   
    });     
  },

  async down (queryInterface,) {   
     await queryInterface.dropTable('users');
     
  }
};
