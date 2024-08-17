const express = require("express");
const userRoutes = require("./userRoutes.js");

const routes = express.Router();

routes.use(userRoutes);

module.exports = routes;
