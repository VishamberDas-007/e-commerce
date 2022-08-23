const express = require("express"); // importing the express package
const routes = express.Router(); // initializing the router function
const { commonCtrl } = require("../../controllers/index"); // importing the ctrl index
const auth = require("../../middlewares/auth-middleware"); // importing the auth middleware

// post method for auth purpose
routes.post("/auth", async (req, res) => {
	const result = await commonCtrl.auth.signUp(req);
	console.log({ result });
	return res.status(result.status).json({ result });
});

module.exports = routes; // exporting routes
