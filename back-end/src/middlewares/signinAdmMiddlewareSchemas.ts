import { NextFunction, Request, Response } from "express";

import joi from "joi";

const postSigninAdmSchema = joi.object({
  name: joi.string().required(),//.trim()
  password: joi.string().min(5).required(),
});

function validateBody(req: Request, res: Response, next: NextFunction) {

  const validation = postSigninAdmSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const error = validation.error.details.map((value) => value.message);
    return res.status(403).send({ error: error });
  }
  next();
};

export { validateBody };
