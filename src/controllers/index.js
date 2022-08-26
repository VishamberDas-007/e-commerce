// index file of controller

// common ctrl
exports.commonCtrl = {
	auth: require("./commonCtrl/auth"), // importing auth file
};

// admin ctrl
exports.adminCtrl = {
	category: require("./adminCtrl/categories"), // importing category file
};
