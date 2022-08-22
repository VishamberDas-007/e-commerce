"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class userHasRole extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	userHasRole.init(
		{
			roleID: DataTypes.Integer(11),
			userID: DataTypes.Integer(11),
		},
		{
			sequelize,
			modelName: "userHasRole",
		}
	);
	return userHasRole;
};
