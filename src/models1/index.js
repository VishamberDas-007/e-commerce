const Sequelize = require("sequelize");
const config = require("../../config/default.json");

const sequelize = new Sequelize(
	config.mysql.database,
	config.mysql.username,
	config.mysql.password,
	{
		host: config.mysql.host,
		dialect: config.mysql.dialect,
	}
);

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./userModel")(sequelize, Sequelize); // user model is imported

db.sequelize.sync().then(() => {
	console.log("Model synced successfully");
});

module.exports = db;
