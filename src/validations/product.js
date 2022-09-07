const { body, param } = require("express-validator");

// validation of category insertion
const productInsertValidate = [
	//checking if the name field is empty
	body("catID").notEmpty().isNumeric().withMessage({
		message: "Enter the category",
	}),
	body("name").notEmpty().isAlpha().withMessage({
		message: "Enter your name",
	}),
	body("product_info").notEmpty().withMessage({
		message: "Enter your product Information",
	}),
	body("actual_price").notEmpty().isNumeric().withMessage({
		message: "Enter your actual price of the product",
	}),
	body("selling_price").notEmpty().isNumeric().withMessage({
		message: "Enter your selling price of the product",
	}),
	body("description").notEmpty().withMessage({
		message: "Enter your description of the product",
	}),
];

module.exports = { productInsertValidate };
