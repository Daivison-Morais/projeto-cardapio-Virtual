import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import { deleteRequest, getByIdRequest, getRequests, postRequests, putRequests } from "@/controllers";

const requestsRouter = Router();

requestsRouter
  .post("", postRequests)
  .get("", getRequests)
  .get("/:idRequest", getByIdRequest)
  .put("", putRequests)
  .delete("/delete/:idRequest", deleteRequest)

export { requestsRouter };
