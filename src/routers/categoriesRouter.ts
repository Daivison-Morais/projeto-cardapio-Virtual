import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import { getCategories } from "@/controllers";

const categoriesRouter = Router();

categoriesRouter
  //.all("/*", authenticateToken)
  .get("", getCategories)

export { categoriesRouter };
