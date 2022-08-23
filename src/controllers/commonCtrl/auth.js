const response = require("../../responses/response"); // importing response function
const db = require("../../../models/index"); // importing the db for ccessing the models
// const admin = require("../../firebase/service");

// creating signUp function

exports.signUp = async (req) => {
	// exporting the signup function
	try {
		//creating the object to possess the details of the user
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

		// if user present the storing the details in the db
		await db.users.create({
			email: userDetails.email,
			contactNumber: userDetails.contactNumber,
			uidNumber: userDetails.uidNumber,
			country: userDetails.country,
		});
		console.log("123");

		// returning success response
		return response.successResponse(
			"User registered successfully!!",
			userDetails
		);
	} catch (error) {
		// if any error occurs it's caught

		// returning the error response
		return response.errorResponse(
			"Error occurred while filling details",
			error
		);
	}
};
