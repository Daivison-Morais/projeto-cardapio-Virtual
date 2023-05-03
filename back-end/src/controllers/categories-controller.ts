import categoriesService from "@/services/categories-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getCategories(req: Request, res: Response) {
    try {
      const lstCategories = await categoriesService.getCategories();
  
      return res.status(httpStatus.OK).send(lstCategories);
    } catch (error) {
      console.log(error)
      return res.sendStatus(httpStatus.NO_CONTENT);
    }
  }