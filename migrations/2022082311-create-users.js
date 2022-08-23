"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: true,
				type: Sequelize.STRING(60),
			},
			lastName: {
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
			uidNumber: {
				allowNull: false,
				type: Sequelize.STRING(128),
				unique: true,
			},
			country: {
				allowNull: true,
				type: Sequelize.STRING(15),
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
		await queryInterface.dropTable("users");
	},
};
