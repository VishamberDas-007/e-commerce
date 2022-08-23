"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class users extends Model {
		static associate(models) {
			// define association here
		}
	}
	users.init(
		{
			firstName: DataTypes.STRING(60), // first name of user
			lastName: DataTypes.STRING(60), // user's last name
			email: DataTypes.STRING(255), // user's email id
			address: DataTypes.STRING(255), // user's address
			contactNumber: DataTypes.STRING(15), // contact number of the user
			uidNumber: DataTypes.STRING(128), // unique id as per firebase
			country: DataTypes.STRING(15), // country origin of the user
			status: DataTypes.ENUM("Active", "Inactive"), // current status of the user
		},
		{
			sequelize,
			modelName: "users", // model name
		}
	);
	return users; // returning the users
};
