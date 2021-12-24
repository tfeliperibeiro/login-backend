const Joi = require("joi");

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string()
      .regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i)
      .not()
      .empty()
      .required()
      .messages({
        "any.required": "O campo email é obrigatório!",
        "string.pattern.base": "Digite um email válido!",
      }),
    password: Joi.string().min(6).not().empty().required().messages({
      "any.required": "O campo senha é obrigatório!",
      "string.min": "A senha deve ter no mínimo de 6 caracteres!",
    }),
  }).validate(req.body);

  if (error) return next(error);
  return next();
};

module.exports = {
  validateLogin,
};
