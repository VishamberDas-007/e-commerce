"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("products", {
			id: {
				// uniquely defines the products in this table
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER(11),
			},
			catID: {
				// A foreign key from roles table
				type: Sequelize.INTEGER(11),
				allowNull: false,
				references: {
					model: "categories",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			name: {
				// The name of product to be listed in product table and will be unique
				type: Sequelize.STRING(50),
				allowNull: false,
				unique: true,
			},
			product_info: {
				// Information about the product
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			actual_price: {
				// Actual price of product
				type: Sequelize.INTEGER(11),
				// allowNull: false,
			},
			selling_price: {
				// Selling price of product
				type: Sequelize.INTEGER(11),
				// allowNull: false,
			},
			description: {
				// Briefing about the product
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			status: {
				// current status of the product
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
		await queryInterface.dropTable("products");
	},
};
