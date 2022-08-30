const express = require("express"); // importing the express package
const routes = express.Router(); // initializing the router function
const { adminCtrl } = require("../../controllers/index"); // importing the admin ctrl
const auth = require("../../middlewares/auth-middleware"); // importing the auth middleware

// post method for inserting product
routes.post("/insert", async (req, res) => {
	const result = await adminCtrl.product.insert(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

module.exports = routes; // exporting routes
