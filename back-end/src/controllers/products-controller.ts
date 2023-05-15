import productsService from "@/services/products-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getProducts(req: Request, res: Response) {

  const  categoryId  = Number(req.params.categoryId);
  if(!categoryId){
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

    try {
      const lstProducts = await productsService.getProducts(categoryId);
  
      return res.status(httpStatus.OK).send(lstProducts);
    } catch (error) {
      return res.sendStatus(httpStatus.NO_CONTENT);
    }
  }