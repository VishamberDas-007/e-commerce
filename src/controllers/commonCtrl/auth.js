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
			phoneNumber: req.body.phoneNumber,
			name: req.body.name,
		};
		console.log(userDetails);

		if (!userDetails) {
			return response.notFound("Please enter the details!!");
		}
		console.log("before123");
		await db.users.create({
			phoneNumber: userDetails.phoneNumber,
			name: userDetails.name,
		});
		console.log("123");
		response.successResponse("User registered successfully!!", userDetails);
	} catch (error) {
		response.errorResponse("Error occurred while filling details", error);
	}
};
