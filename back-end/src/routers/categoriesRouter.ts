import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import { getCategories } from "@/controllers";

const categoriesRouter = Router();

categoriesRouter
  .get("/", getCategories)

export { categoriesRouter };
