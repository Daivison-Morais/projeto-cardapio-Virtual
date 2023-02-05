import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import { getRequests, postRequests } from "@/controllers";

const requestsRouter = Router();

requestsRouter
  .post("", postRequests)
  .get("", getRequests)

export { requestsRouter };
