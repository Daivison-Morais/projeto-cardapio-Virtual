import Joi from "joi";

const postSigninSchema = Joi.object({
    name: Joi.string().trim().required(),
    password: Joi.string().trim().min(5).required(),
  });

  export { postSigninSchema };