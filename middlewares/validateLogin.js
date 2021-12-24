const Joi = require("joi");

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string()
      .regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i)
      .not()
      .empty()
      .required(),
    password: Joi.string().min(6).not().empty().required(),
  })
    .messages({
      "any.required": "Email e senha são obrigatórios",
      "string.pattern.base": "Email inválido ou senha inválidos",
      "string.min": "A senha deve ter mais de 6 caracteres",
    })
    .validate(req.body);

  if (error) return next(error);
  return next();
};

module.exports = {
  validateLogin,
};
