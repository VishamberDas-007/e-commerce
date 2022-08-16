const express = require("express");
const routes = express.Router();
const { commonCtrl } = require("../../controllers/index");
const auth = require("../../middlewares/auth-middleware");

routes.post("/auth", auth.authMiddleware, async (req, res) => {
	const result = await commonCtrl.auth.signUp(req).then();
	console.log({ result });
	return res.status(200).json({ result: "OK", decodedToken: result });
});

module.exports = routes;
