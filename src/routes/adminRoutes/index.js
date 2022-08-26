const express = require("express");
const routes = express.Router();

routes.use("/auth", require("./auth")); // importing the auth routes
routes.use("/category", require("./categories")); // importing the category routes

module.exports = routes; //exporting routes
