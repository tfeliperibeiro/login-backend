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

  if (resultUser === null) {
    return internalError(
      "Erro ao cadastrar usuário! Tente novamente mais tarde."
    );
  }

  return await registerNewUserModel(name, email, password);
};

const loginUserService = async (id, email, password) => {
  const resultUser = await getLoginUserModelById(id);

  if (resultUser === null) {
    return internalError(
      "Erro ao fazer login! Tente novamente mais tarde ou cadastre um novo usuário!"
    );
  }

  if (resultUser.email !== email || resultUser.password !== password) {
    return emailAndPasswordInvalid("Email ou senha inválidos!");
  }

  return resultUser;
};

module.exports = {
  registerUserService,
  loginUserService,
};
