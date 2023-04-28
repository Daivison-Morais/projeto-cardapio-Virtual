import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import { postSigninAdm } from "@/controllers/signinAdm-Controller";
import { validateBody } from "@/middlewares/signinAdmMiddlewareSchemas";

const postSigninRouter = Router();

postSigninRouter
  .post("/", validateBody, postSigninAdm)

export { postSigninRouter };
