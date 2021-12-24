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
    status: "Success",
  });
};

const loginUserController = async (req, res, next) => {
  const { email, password } = req.body;

  const resultLoginUser = await loginUserService(email, password);

  if (resultLoginUser.isError) {
    return next(resultLoginUser);
  }

  return res.status(StatusCodes.OK).json({
    message: "Login feito com sucesso! Você será redirecionado.",
    redirect: true,
  });
};

module.exports = {
  registerUserController,
  loginUserController,
};
