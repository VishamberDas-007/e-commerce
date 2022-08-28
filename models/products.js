"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class products extends Model {
		static associate(models) {
			// defining the association here

			// category - product relationship
			models.categories.hasMany(products, {
				as: "products",
			});

			// product - category relationship
			products.belongsTo(models.categories, {
				as: "categories",
				foreignKey: "catID",
			});
		}
	}
	products.init(
		{
			catID: DataTypes.INTEGER(11), // A foreign key from roles table
			name: DataTypes.STRING(50), // The name of product to be listed in product table and will be unique
			product_info: DataTypes.INTEGER(11), // Information about the product
			actual_price: DataTypes.INTEGER(11), // Actual price of product
			selling_price: DataTypes.INTEGER(11), // Selling price of product
			description: DataTypes.STRING(255), // Briefing about the product
			status: DataTypes.ENUM("Active", "Inactive"), // current status of the product
		},
		{
			sequelize,
			modelName: "products",
		}
	);
	return products; // returning the model
};
