const { registerUserService } = require("../services/loginService");

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  const resultRegisterUser = await registerUserService(name, email, password);

  if (resultRegisterUser.isError) {
    return next(resultRegisterUser);
  }

  return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
};

module.exports = {
  registerController,
};
