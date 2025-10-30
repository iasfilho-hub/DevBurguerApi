'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('products', {
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			path: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			category: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('products');
	},
};
