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
			},
			userID: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
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
