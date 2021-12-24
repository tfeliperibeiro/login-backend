const errors = (code, message) => ({
  isError: true,
  code,
  message,
});

const internalErros = {
  userAlreadyExists: (message) => errors(401, message),
  internalError: (message) => errors(500, message),
  emailAndPasswordInvalid: (message) => errors(404, message),
};

module.exports = internalErros;
