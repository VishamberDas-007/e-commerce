const response = require("../../responses/response");
const db = require("../../../models/index");
const admin = require("../../firebase/service");

// creating signUp function

exports.signUp = async (req) => {
	try {
		var decodedToken;
		const token = req.headers.token || req.body.token;
		if (token) {
			decodedToken = await admin.auth().verifyIdToken(token);
			console.log({ decodedToken });
			return response.successResponse("Token found successfully", decodedToken);
		}
	} catch (error) {
		return response.errorResponse("Error occured storing data", error);
	}
};

// 		// return response.successResponse("Token found successfully", token);
// 		// try {
// 		// 	admin
// 		// 		.auth()
// 		// 		.verifyIdToken(token, true)
// 		// 		.then((claims) => {
// 		// 			// Get the user's previous IP addresses, previously saved.
// 		// 			console.log(claims.sub);
// 		// 			return getPreviousUserIpAddresses(claims.sub);
// 		// 		})
// 		// 		.then((previousIpAddresses) => {
// 		// 			// Get the request IP address.
// 		// 			const requestIpAddress = req.connection.remoteAddress;
// 		// 			// Check if the request IP address origin is suspicious relative to previous
// 		// 			// IP addresses. The current request timestamp and the auth_time of the ID
// 		// 			// token can provide additional signals of abuse especially if the IP address
// 		// 			// suddenly changed. If there was a sudden location change in a
// 		// 			// short period of time, then it will give stronger signals of possible abuse.
// 		// 			if (!isValidIpAddress(previousIpAddresses, requestIpAddress)) {
// 		// 				// Invalid IP address, take action quickly and revoke all user's refresh tokens.
// 		// 				revokeUserTokens(claims.uid).then(
// 		// 					() => {
// 		// 						// response.errorResponse("Unauthorized access. Please login again!",error)
// 		// 						console.log("revokeUserTokens");
// 		// 						return response.errorResponse(
// 		// 							"Error occurred!!",
// 		// 							"Unauthorized access. Please login again!"
// 		// 						);
// 		// 						// res
// 		// 						// 	.status(401)
// 		// 						// 	.json({ error: "Unauthorized access. Please login again!" });
// 		// 					},
// 		// 					(error) => {
// 		// 						console.log("error");
// 		// 						return response.errorResponse("Error occurred!!", error);

// 		// 						// res
// 		// 						// 	.status(401)
// 		// 						// 	.json({ error: "Unauthorized access. Please login again!" });
// 		// 					}
// 		// 				);
// 		// 			} else {
// 		// 				// Access is valid. Try to return data.
// 		// 				getData(claims).then((data) => {
// 		// 					console.log("getData");
// 		// 					return response.successResponse(JSON.stringify(data), (error) => {
// 		// 						return response.errorResponse("Error occurred", error);
// 		// 						// res.status(500).json({ error: "Server error!" });
// 		// 					});
// 		// 				});
// 		// 			}
// 		// 		});
// 		// } catch (error) {
// 		return response.successResponse("Token found successfully", { token });
// 		// }
// 	} catch (error) {
// 		console.log("4");
// 		return response.errorResponse("Error occurred while signing up", error);
// 	}
// };
