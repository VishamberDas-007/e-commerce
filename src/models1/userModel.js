module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define("users", {
		id: {
			type: Sequelize.INTEGER(11),
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING(255),
			allowNull: false,
			unique: true,
		},
		address: {
			type: Sequelize.STRING(255),
			allowNull: true,
		},
		password: {
			type: Sequelize.STRING(255),
			allowNull: false,
		},
		contactNumber: {
			type: Sequelize.STRING(15),
			allowNull: false,
			unique: true,
		},
		country: {
			type: Sequelize.STRING(56),
			allowNull: false,
		},
	});
	return user;
};
