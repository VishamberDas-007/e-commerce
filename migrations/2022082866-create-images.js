"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("images", {
			id: {
				// uniquely defines the images in this table
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER(11),
			},
			prod_ID: {
				// prod ID (foreign key -> product model)
				type: Sequelize.INTEGER(11),
				allowNull: false,
				references: {
					model: "products",
					key: "id",
				},
			},
			image_url: {
				// url of the image
				type: Sequelize.STRING(255),
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
		await queryInterface.dropTable("images");
	},
};
