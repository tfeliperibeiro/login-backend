const {
  registerUserService,
  loginUserService,
} = require("../services/loginService");

const { StatusCodes } = require("http-status-codes");

const registerUserController = async (req, res, next) => {
  const { name, email, password } = req.body;
  const resultRegisterUser = await registerUserService(name, email, password);

  if (resultRegisterUser.isError) {
    return next(resultRegisterUser);
  }

  return res.status(StatusCodes.CREATED).json({
    message: "Usuário cadastrado com sucesso!",
    id: resultRegisterUser.insertedId,
  });
};

const loginUserController = async (req, res, next) => {
  const { id } = req.headers;
  const { email, password } = req.body;

  const resultLoginUser = await loginUserService(id, email, password);

  if (resultLoginUser.isError) {
    return next(resultLoginUser);
  }

  return res
    .status(StatusCodes.OK)
    .json({ message: "Login feito com sucesso!", redirect: true });
};

module.exports = {
  registerUserController,
  loginUserController,
};
