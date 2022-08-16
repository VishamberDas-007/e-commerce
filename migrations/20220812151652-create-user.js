"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER(11),
			},
			name: {
				allowNull: true,
				type: Sequelize.STRING(60),
			},
			email: {
				allowNull: true,
				type: Sequelize.STRING(255),
				unique: true,
			},
			address: {
				allowNull: true,
				type: Sequelize.STRING(255),
			},
			contactNumber: {
				allowNull: false,
				type: Sequelize.STRING(15),
				unique: true,
			},
			status: {
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
		await queryInterface.dropTable("Users");
	},
};
