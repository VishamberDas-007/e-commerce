"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class roles extends Model {
		static associate(models) {
			// define association here
		}
	}
	roles.init(
		{
			name: DataTypes.STRING(10), // role name
		},
		{
			sequelize,
			modelName: "roles",
		}
	);
	return roles; // returning the roles
};
