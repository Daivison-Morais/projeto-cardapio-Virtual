import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import { postRequests } from "@/controllers";

const requestsRouter = Router();

requestsRouter
  .post("", postRequests)

export { requestsRouter };
