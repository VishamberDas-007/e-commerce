const express = require("express"); // importing the express package
const expressApp = express(); // initializing the express function
const bodyParser = require("body-parser"); // importing body-parser package
const config = require("./config/config.json"); // importing config
expressApp.use(bodyParser.json()); // parses the json format
expressApp.use(bodyParser.urlencoded({ extended: true })); // enhances to get the urlencoded requests
const db = require("./models/index"); // importing the db from models
const helmet = require("helmet"); // for securing expressApp

expressApp.use(helmet());

//routes
expressApp.use("/api", require("./src/routes/index"));

// Listening app at defined port in config file
expressApp.listen(7777, () => {
	console.log("Running successfully on port number ", 7777);
});
