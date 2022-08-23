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
			// defining association with role model
			userHasRole.belongsTo(models.roles, {
				as: "roles",
				foreignKey: "roleID",
			});
		}
	}
	userHasRole.init(
		{
			roleID: DataTypes.INTEGER(11),
			userID: DataTypes.INTEGER(11),
		},
		{
			sequelize,
			modelName: "userHasRole",
		}
	);
	return userHasRole;
};
