const crypto = require("crypto-js");
require("dotenv").config();

const {
  getLoginUserModelByEmail,
  registerNewUserModel,
  getLoginUserModelById,
} = require("../models/loginModel");

const {
  userAlreadyExists,
  internalError,
  emailAndPasswordInvalid,
} = require("../errors/internalErrors");

const registerUserService = async (name, email, password) => {
  const resultUser = await getLoginUserModelByEmail(email);

  if (resultUser) {
    return userAlreadyExists("Usuario já cadastrado!");
  }

  const passwordEncrypt = crypto.AES.encrypt(
    password,
    process.env.SECRET
  ).toString();

  return await registerNewUserModel(name, email, passwordEncrypt);
};

const loginUserService = async (id, email, password) => {
  const resultUser = await getLoginUserModelById(id);

  if (resultUser === null) {
    return internalError("Erro ao fazer login, tente novamente mais tarde.");
  }

  const byte = crypto.AES.decrypt(resultUser.password, process.env.SECRET);
  const passwordDecrypt = byte.toString(crypto.enc.Utf8);

  if (resultUser.email !== email || passwordDecrypt !== password) {
    return emailAndPasswordInvalid("Email ou senha inválidos!");
  }

  return resultUser;
};

module.exports = {
  registerUserService,
  loginUserService,
};
