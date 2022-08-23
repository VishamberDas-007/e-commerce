"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class categories extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	categories.init(
		{
			name: DataTypes.STRING(50), // name of the category
			status: DataTypes.ENUM("Active", "Inactive"), // current status of the category
		},
		{
			sequelize,
			modelName: "categories", // model name
		}
	);
	return categories; // returing the categories
};
