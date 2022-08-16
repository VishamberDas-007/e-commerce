"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			name: DataTypes.STRING(60),
			email: DataTypes.STRING(255),
			address: DataTypes.STRING(255),
			contactNumber: DataTypes.STRING(15),
			status: DataTypes.ENUM("Active", "Inactive"),
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
