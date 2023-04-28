const postSigninSchema = joi.object({
    email: joi.string().email().trim().required(),
    password: joi.string().min(5).required(),
  });

  export { postSigninSchema };