const Joi = require("joi");

const validateRegister = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).not().empty().required().messages({
      "any.required": "O campo nome é obrigatório!",
      "string.min": "O nome deve ter no mínimo de 3 caracteres!",
      "string.empty": "O campo nome não pode estar vazio!",
    }),
    email: Joi.string()
      .regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i)
      .not()
      .empty()
      .required()
      .messages({
        "any.required": "O campo email é obrigatório!",
        "string.pattern.base": "Digite um email válido!",
        "string.empty": "O campo email não pode estar vazio!",
      }),
    password: Joi.string().min(6).not().empty().required().messages({
      "any.required": "O campo senha é obrigatório!",
      "string.min": "A senha deve ter no mínimo de 6 caracteres!",
      "string.empty": "O campo senha não pode estar vazio!",
    }),
  }).validate(req.body);

  if (error) return next(error);
  return next();
};

module.exports = {
  validateRegister,
};
