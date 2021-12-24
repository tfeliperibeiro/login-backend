const express = require("express");
const {
  registerUserController,
  loginUserController,
} = require("../controllers/loginController");

const Routes = express.Router();
const { validateRegister } = require("../middlewares/validateRegister");
const { validateLogin } = require("../middlewares/validateLogin");

Routes.post("/register", validateRegister, registerUserController);
Routes.post("/login", validateLogin, loginUserController);

module.exports = Routes;
