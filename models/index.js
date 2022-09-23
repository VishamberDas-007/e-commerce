"use strict";
// index file of the models folder
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env]; // requiring the config
const db = {}; // creating an empty object

// initializing sequelize and providing the configurations
const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

db.sequelize = sequelize; // initializing the constant possessing configuration setup
db.Sequelize = Sequelize; // initializing the imported sequelize
db.users = require("./users")(sequelize, Sequelize); // importing the users model
db.roles = require("./roles")(sequelize, Sequelize); // importing the roles model
db.userHasRole = require("./userhasrole")(sequelize, Sequelize); // importing the userHasRole model
db.categories = require("./categories")(sequelize, Sequelize); // importing the category model
db.products = require("./products")(sequelize, Sequelize); // importing the product model
db.images = require("./images")(sequelize, Sequelize); // importing the image model

// defining the relations between models
//  userHasRole - roles relationship
db.userHasRole.belongsTo(db.roles, {
	// as: "roles",
	foreignKey: "roleID",
	targetKey: "id",
});

// users - userHasRole relationship
db.users.hasOne(db.userHasRole, {
	// as: "userHasRole",
	foreignKey: "userID",
	sourceKey: "id",
});

// category - product relationship
db.categories.hasMany(db.products, {
	// as: "products",
	foreignKey: "prodID",
	sourceKey: "id",
});

// product - category relationship
db.products.belongsTo(db.categories, {
	// as: "categories",
	foreignKey: "catID",
	targetKey: "id",
});

// product - images relationship
db.images.belongsTo(db.products, {
	foreignKey: "prod_ID",
	sourceKey: "id",
});

module.exports = db; // exporting the db
