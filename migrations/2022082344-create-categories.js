"use strict";
// migration of the category table
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("categories", {
			id: {
				// uniquely defines the category in this table
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				// name of the category
				type: Sequelize.STRING(50),
				allowNull: false,
				unique: true,
			},
			status: {
				// current status of the category
				type: Sequelize.ENUM("Active", "Inactive"),
				defaultValue: "Active",
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
		await queryInterface.dropTable("categories");
	},
};
