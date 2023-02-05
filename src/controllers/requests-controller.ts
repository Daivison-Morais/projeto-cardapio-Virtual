import { Request, Response } from "express";
import requestsService from "@/services/requests-service";
import httpStatus from "http-status";

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