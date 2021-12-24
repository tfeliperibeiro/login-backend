const errors = (code, message) => ({
  isError: true,
  code,
  message,
});

const internalErros = {
  userAlreadyExists: (message) => errors(401, message),
};

module.exports = internalErros;
