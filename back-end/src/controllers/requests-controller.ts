import { Request, Response } from "express";
import requestsService from "@/services/requests-service";
import httpStatus from "http-status";
import { RequestUser } from "@/protocols";

export async function postRequests(req: Request, res: Response) {
  const lstRequests = req.body as RequestUser;

  try {
    const request = await requestsService.postRequests(lstRequests);

    return res.status(httpStatus.CREATED).send(request);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getRequests(req: Request, res: Response) {
  try {
    const requests = await requestsService.getRequests();
    return res.status(httpStatus.OK).send(requests);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getByIdRequest(req: Request, res: Response) {
  const idRequest = Number(req.params.idRequest);
  if (!idRequest) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const requests = await requestsService.getByIdRequest(idRequest);
    console.log(requests);
    return res.status(httpStatus.OK).send(requests);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function putRequests(req: Request, res: Response) {
  const { idRequest, status } = req.body;
  console.log(req.body);

  try {
    const requests = await requestsService.putRequests(
      Number(idRequest),
      status
    );

    return res.status(httpStatus.OK).send(requests);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function deleteRequest(req: Request, res: Response) {
  const idRequest = Number(req.params.idRequest);

  try {
    const requests = await requestsService.deleteRequest(idRequest);

    return res.status(httpStatus.OK).send(requests);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
