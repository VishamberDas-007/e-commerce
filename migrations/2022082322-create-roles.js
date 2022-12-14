"use strict";
// migration of the role table
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("roles", {
			id: {
				// uniquely defines the role in this table
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				// name of the role
				type: Sequelize.STRING(10),
				allowNull: false,
				unique: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("roles");
	},
};
