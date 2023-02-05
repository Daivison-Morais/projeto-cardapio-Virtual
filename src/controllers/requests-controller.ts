import { Request, Response } from "express";
import requestsService from "@/services/requests-service";
import httpStatus from "http-status";
import productsService from "@/services/products-service";


export async function postRequests(req: Request, res: Response) {

  const lstRequests  = req.body;
  
  if (!lstRequests) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

    try {
      await requestsService.postRequests(lstRequests);
      
      return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      console.log(error)
      return res.sendStatus(httpStatus.NO_CONTENT);
    }
}


export async function getRequests(req: Request, res: Response) {

    try {
      const requests = await requestsService.getRequests();
console.log(requests)
      return res.status(httpStatus.OK).send(requests);
    } catch (error) {
      return res.sendStatus(httpStatus.NO_CONTENT);
    }
  }