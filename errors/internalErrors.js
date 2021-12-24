const { StatusCodes } = require("http-status-codes");

const errors = (code, message) => ({
  isError: true,
  code,
  message,
});

const internalErros = {
  userAlreadyExists: (message) => errors(StatusCodes.CONFLICT, message),
  internalError: (message) =>
    errors(StatusCodes.INTERNAL_SERVER_ERROR, message),
  emailAndPasswordInvalid: (message) => errors(StatusCodes.CONFLICT, message),
};

module.exports = internalErros;
