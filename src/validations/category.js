const { check, body } = require("express-validator");

// validation of category insertion
const categoryInsertValidate = [
	// checking if the name field is empty and contains alphabets
	body("name")
		.not()
		.isEmpty()
		.withMessage({
			message: "Name not entered",
		})
		.isAlpha()
		.withMessage({
			message: "Name should contain alphabets",
		}),
];

// validate if id is present in the params
const categoryIDValidate = [
	check("id")
		.notEmpty()
		.withMessage({
			message: "Please enter id",
		})
		.isNumeric()
		.withMessage({
			message: "Id entered should be numeric",
		}),
];

module.exports = { categoryInsertValidate, categoryIDValidate };
