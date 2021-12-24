const errorLogin = (err, _req, res, _next) => {
  if (err.isError) {
    return res.status(404).json({ message: err.message });
  }

  return res.status(200).json({ message: err.details[0].message });
};

module.exports = errorLogin;
