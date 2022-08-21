const express = require("express");
const routes = express.Router();
const { commonCtrl } = require("../../controllers/index");
const auth = require("../../middlewares/auth-middleware");

routes.post("/auth", async (req, res) => {
	const result = await commonCtrl.auth.signUp(req);
	console.log({ result });
	return res.status(200).json({ message: "OK", data: result });
});

module.exports = routes;
