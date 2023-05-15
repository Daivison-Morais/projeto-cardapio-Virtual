import signinAdmService from "@/services/signinAdm-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postSigninAdm(req: Request, res: Response) {
  const { name, password } = req.body;
 
  try {
    const restaurantToken = await signinAdmService.signinAdm(name, password);
    return res.status(httpStatus.OK).send(restaurantToken);
  } catch (error) {
    
    if(error.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send({ error: error.message });
    }
    console.log(error)
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
