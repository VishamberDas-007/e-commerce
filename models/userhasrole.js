"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class userHasRole extends Model {
		static associate(models) {
			// defining association with role model
			userHasRole.belongsTo(models.roles, {
				as: "roles",
				foreignKey: "roleID",
			});

			// defining association with the user model
			models.users.hasOne(userHasRole, {
				as: "userHasRole",
				foreignKey: "userID",
			});
		}
	}
	userHasRole.init(
		{
			roleID: DataTypes.INTEGER(11), // role ID (foreign key -> roles model)
			userID: DataTypes.INTEGER(11), // user ID (foreign key -> users model)
		},
		{
			sequelize,
			modelName: "userHasRole", // name of model
		}
	);
	return userHasRole; // returning the userHasRole
};
