const response = require("../../responses/response");
const db = require("../../../models/index");
const admin = require("../../firebase/service");

// creating signUp function

// exports.signUp = async (req) => {
// 	try {
// 		var decodedToken;
// 		const token = req.headers.token || req.body.token;
// 		// if (token) {
// 		decodedToken = await admin.auth().verifyIdToken(token);
// 		console.log({ decodedToken });

// 		return response.successResponse("Token found successfully", decodedToken);
// 		// }
// 	} catch (error) {
// 		return response.errorResponse("Error occured storing data", error);
// 	}
// };

exports.signUp = async (req) => {
	try {
		const userDetails = {
			email: req.body.email,
			contactNumber: req.body.contactNumber,
			uidNumber: req.body.uidNumber,
			country: req.body.country,
		};
		console.log(userDetails);

		if (!userDetails) {
			return response.notFound("Please enter the details!!");
		}
		console.log("before123");
		await db.users.create({
			email: userDetails.email,
			contactNumber: userDetails.contactNumber,
			uidNumber: userDetails.uidNumber,
			country: userDetails.country,
		});
		console.log("123");
		return response.successResponse(
			"User registered successfully!!",
			userDetails
		);
	} catch (error) {
		return response.errorResponse(
			"Error occurred while filling details",
			error
		);
	}
};
