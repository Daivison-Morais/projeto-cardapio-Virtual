import { Router } from "express";
import { deleteRequest, getByIdRequest, getRequests, postRequests, putRequests } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { requestSchema } from "../schemas/postRequestSchema";

const requestsRouter = Router();

requestsRouter
  .post("", validateBody(requestSchema), postRequests)
  .get("/:idRequest", getByIdRequest)
  .all("/*", authenticateToken)
  .get("", getRequests)
  .put("", putRequests)
  .delete("/delete/:idRequest", deleteRequest)

export { requestsRouter };
