const express = require("express");
const routes = express.Router();

routes.use("/admin", require("./adminRoutes/auth"));

module.exports = routes;
