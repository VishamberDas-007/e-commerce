const express = require("express"); // importing the express package
const routes = express.Router(); // initializing the router function
const { adminCtrl } = require("../../controllers/index"); // importing the admin ctrl
const auth = require("../../middlewares/auth-middleware"); // importing the auth middleware
const validation = require("../../validations/category");
const { validationResult } = require("express-validator");
// post method for inserting category
routes.post("/insert", validation.categoryInsertValidate, async (req, res) => {
	//validation result
	const errors = await validationResult(req);
	if (!errors.isEmpty()) {
		return res.json(errors);
	}

	// result from the controller
	const result = await adminCtrl.category.insert(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// get method for editing category
routes.get("/edit", validation.categoryIDValidate, async (req, res) => {
	//validation result
	const errors = await validationResult(req);
	if (!errors.isEmpty()) {
		return res.json(errors);
	}

	// result from the controller
	const result = await adminCtrl.category.listing(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// put method for updating category
routes.put("/update/:id", validation.categoryUpdate, async (req, res) => {
	const result = await adminCtrl.category.update(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// delete method for deleting category
routes.delete(
	"/delete/:id",
	validation.categoryIDValidate,
	async (req, res) => {
		//validation result
		const errors = await validationResult(req);
		if (!errors.isEmpty()) {
			return res.json(errors);
		}

		// result from controller
		const result = await adminCtrl.category.delete(req);
		console.log({ result });
		return res.status(result.status).json({ result });
	}
);

// listing method for listing category
routes.get("/listing", async (req, res) => {
	const result = await adminCtrl.category.listing(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// put method for updating status of category
routes.put("/status/:id", validation.categoryIDValidate, async (req, res) => {
	//validation result
	const errors = await validationResult(req);
	if (!errors.isEmpty()) {
		return res.json(errors);
	}

	// result from controller
	const result = await adminCtrl.category.status(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

module.exports = routes; // exporting routes
