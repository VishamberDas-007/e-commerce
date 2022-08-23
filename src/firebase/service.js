const admin = require("firebase-admin"); // importing the firebase-dmin package for initializing purpose
const serviceAccount = require("../../config/e-commerce.json"); // importing the json file

// initializing the admin
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin; // exporting the admin
