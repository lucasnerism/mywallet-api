import Joi from "joi";

export const signInSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required()
});

export const signUpSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().min(3).required()
});
