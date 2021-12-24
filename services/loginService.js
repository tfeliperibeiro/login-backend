const {
  getLoginUserModel,
  registerNewUserModel,
} = require("../models/loginModel");

const { userAlreadyExists } = require("../errors/internalErrors");

const registerUserService = async (name, email, password) => {
  const resultUser = await getLoginUserModel(email);

  if (resultUser) {
    return userAlreadyExists("Usuario já cadastrado!");
  }

  return await registerNewUserModel(name, email, password);
};

module.exports = {
  registerUserService,
};
