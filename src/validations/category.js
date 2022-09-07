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
			message: "Input format not suppported",
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
			message: "Input format not suppported",
		}),
];

const categoryUpdate = [
	check("id")
		.notEmpty()
		.withMessage({
			message: "Please enter id",
		})
		.isNumeric()
		.withMessage({
			message: "Input format not suppported",
		}),
	body("name")
		.not()
		.isEmpty()
		.withMessage({
			message: "Name not entered",
		})
		.isAlpha()
		.withMessage({
			message: "Input format not suppported",
		}),
];

module.exports = { categoryInsertValidate, categoryIDValidate, categoryUpdate };
