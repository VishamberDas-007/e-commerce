const { body, param } = require("express-validator");

// validation of category insertion
const categoryInsertValidate = [
	//checking if the name field is empty
	body("name").not().isEmpty().withMessage({
		message: "Name not entered",
	}),
];

// validate if id is present in the params
const categoryIDValidate = [
	param("id").notEmpty().isNumeric().withMessage({
		message: "Please enter id",
	}),
];

module.exports = { categoryInsertValidate, categoryIDValidate };
