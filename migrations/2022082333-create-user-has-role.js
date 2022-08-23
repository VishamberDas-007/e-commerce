"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("userHasRoles", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			roleID: {
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
