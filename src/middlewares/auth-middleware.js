const admin = require("../firebase/service"); // importing the initialized admin
const utils = require("../../utils/errors"); // importing the utils
// const response = require("../responses/response");

// middleware function to verify token
function authMiddleware(req, res, next) {
	const token = req.headers.token || req.body.token;

	// checking if token is present or not
	if (!token) {
		return res.status(404).json({ message: "No token provided" });
	}
	// decodedToken(req, res, next, token);
	// verifying the token
	admin
		.auth()
		.verifyIdToken(token)
		.then((decodedToken) => {
			next();
		})
		.catch((error) => {
			// to catch the errors if any
			const result = utils.getError(error.code); // getting the error from its code
			return res.status(result.status).json(result); // returning the response
		});
}

module.exports = { authMiddleware }; // exporting the function
