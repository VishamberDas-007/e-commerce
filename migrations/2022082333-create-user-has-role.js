"use strict";
// migration of the userHasRole table
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("userHasRoles", {
			id: {
				// uniquely defines the user with their respective role in this table
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			roleID: {
				// A foreign key from roles table
				type: Sequelize.INTEGER(11),
				allowNull: false,
				references: {
					model: "roles",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			userID: {
				// A foreign key from users table
				type: Sequelize.INTEGER(11),
				allowNull: false,
				references: {
					model: "users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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
		await queryInterface.dropTable("userHasRoles");
	},
};
