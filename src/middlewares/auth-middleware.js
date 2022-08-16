const admin = require("../firebase/service");
const utils = require("../../utils/errors");
const response = require("../responses/response");
var tokenExport;
function authMiddleware(req, res, next) {
	const token = req.headers.token || req.body.token;
	if (!token) {
		return res.status(404).json({ message: "No token provided" });
	}
	// decodedToken(req, res, next, token);
	admin
		.auth()
		.verifyIdToken(token)
		.then((decodedToken) => {
			next();
		})
		.catch((error) => {
			// console.log({ error });
			const result = utils.getError(error.code);
			return res.status(result.status).json(result);
		});
}

module.exports = { authMiddleware };
