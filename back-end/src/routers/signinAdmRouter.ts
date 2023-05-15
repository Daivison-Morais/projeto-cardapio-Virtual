import { Router } from "express";
import { postSigninAdm } from "@/controllers/signinAdm-Controller";
import { validateBody } from "@/middlewares";
import { postSigninSchema } from "@/schemas/postSigninAdmSchema";

const postSigninRouter = Router();

postSigninRouter
  .post("/", validateBody(postSigninSchema), postSigninAdm);

export { postSigninRouter };
