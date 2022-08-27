const express = require("express"); // importing the express package
const routes = express.Router(); // initializing the router function
const { adminCtrl } = require("../../controllers/index"); // importing the admin ctrl
const auth = require("../../middlewares/auth-middleware"); // importing the auth middleware

// post method for inserting category
routes.post("/insert", async (req, res) => {
	const result = await adminCtrl.category.insert(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// get method for editing category
routes.get("/edit/:id", async (req, res) => {
	const result = await adminCtrl.category.edit(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// put method for updating category
routes.put("/update/:id", async (req, res) => {
	const result = await adminCtrl.category.update(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

// delete method for deleting category
routes.delete("/delete/:id", async (req, res) => {
	const result = await adminCtrl.category.delete(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

module.exports = routes; // exporting routes
