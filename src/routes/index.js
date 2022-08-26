const express = require("express");
const routes = express.Router();

routes.use("/admin", require("./adminRoutes/index")); // importing the admin routes

module.exports = routes;
