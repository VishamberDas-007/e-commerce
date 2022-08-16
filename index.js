const express = require("express");
const expressApp = express();
const bodyParser = require("body-parser");
const config = require("./config/config.json");
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models/index");

//routes
expressApp.use("/api", require("./src/routes/index"));

// Listening app at defined port in config file
expressApp.listen(7777, () => {
	console.log("Running successfully on port number ", 7777);
});
