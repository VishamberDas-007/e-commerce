"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class images extends Model {
		static associate(models) {
			// defining the association here
			models.products.hasMany(images, {
				as: "images",
			});
		}
	}
	images.init(
		{
			prod_ID: DataTypes.INTEGER(11), // prod ID (foreign key -> product model)
			image_url: DataTypes.STRING(255), // url of the image
		},
		{
			sequelize,
			modelName: "images",
		}
	);
	return images; // returning the model
};
