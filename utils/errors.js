const response = require("../src/responses/response");

exports.getError = (code) => {
	switch (code) {
		case "auth/id-token-expired":
			// return response.;
			return {
				message: "Token has expired!! Please refresh it...",
				error: "Invalid token",
				status: 408,
			};
		case "auth/argument-error":
			// return response.;
			return {
				message: "Token is invalid",
				error: "Invalid token",
				status: 401,
			};
		default:
			return {
				message: "Token is invalid",
				error: "Invalid token",
				status: 401,
			};
	}
};
