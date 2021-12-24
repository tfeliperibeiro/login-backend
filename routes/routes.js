const express = require("express");
const { registerController } = require("../controllers/loginController");

const Routes = express.Router();
const { validateRegister } = require("../middlewares/validateRegister");

Routes.post("/register", validateRegister, registerController);
Routes.post("/login");

module.exports = Routes;
