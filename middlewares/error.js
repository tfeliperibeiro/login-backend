const { StatusCodes } = require("http-status-codes");

const errorLogin = (err, _req, res, _next) => {
  if (err.isError) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.message, status: "Error" });
  }

  return res
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: err.details[0].message, status: "Error" });
};

module.exports = errorLogin;
