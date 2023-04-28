import { Router } from "express";
//import { authenticateToken } from "@/middlewares";
import  { getProducts }  from "@/controllers";

const productsRouter = Router();

productsRouter
  .get("/:categoryId", getProducts)

export { productsRouter };
