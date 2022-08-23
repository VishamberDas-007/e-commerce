"use strict";
// migration of the user table
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				// uniquely defines the user in this table
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				// user's first name
				allowNull: true,
				type: Sequelize.STRING(60),
			},
			lastName: {
				// user's last name
				allowNull: true,
				type: Sequelize.STRING(60),
			},
			email: {
				// user's email id
				allowNull: true,
				type: Sequelize.STRING(255),
				unique: true,
			},
			address: {
				// user's address
				allowNull: true,
				type: Sequelize.STRING(255),
			},
			contactNumber: {
				// contact number of the user
				allowNull: false,
				type: Sequelize.STRING(15),
				unique: true,
			},
			uidNumber: {
				// unique id as per firebase
				allowNull: false,
				type: Sequelize.STRING(128),
				unique: true,
			},
			country: {
				// country origin of the user
				allowNull: true,
				type: Sequelize.STRING(15),
			},
			status: {
				// current status of the user
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
