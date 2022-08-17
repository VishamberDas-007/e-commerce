const response = require("../../responses/response");
const db = require("../../../models/index");
const admin = require("../../firebase/service");

// creating signUp function

exports.signUp = async (req) => {
	try {
		var decodedToken;
		const token = req.headers.token || req.body.token;
		// if (token) {
		decodedToken = await admin.auth().verifyIdToken(token);
		console.log({ decodedToken });

		return response.successResponse("Token found successfully", decodedToken);
		// }
	} catch (error) {
		return response.errorResponse("Error occured storing data", error);
	}
};

exports.fillDetails = async (req) => {
	try {
		const userDetails = {
			phoneNumber: req.body.phoneNumber,
			name: req.body.name,
		};
		const phoneNumberExist = await db.users.findOne({
			where: {
				contactNumber: phoneNumber,
			},
		});
		if (!phoneNumberExist) {
			return response.notFound("Number not found!!");
		}
		await phoneNumberExist.update({
			name: userDetails.name,
		});
	} catch (error) {
		response.errorResponse("Error occurred while filling details", error);
	}
};
