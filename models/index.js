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

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize; // initializing the constant possessing configuration setup
db.Sequelize = Sequelize; // initializing the imported sequelize
db.users = require("./user")(sequelize, Sequelize); // importing the users model
db.roles = require("./roles")(sequelize, Sequelize); // importing the roles model
db.userHasRole = require("./userhasrole")(sequelize, Sequelize); // importing the userHasRole model

module.exports = db; // exporting the db
