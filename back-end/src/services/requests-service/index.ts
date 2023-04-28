import { notFoundError } from "@/errors";
import requestsRepository from "@/repositories/requests-repository";

async function postRequests (lstRequests:any) {
   const request = await requestsRepository.postRequests(lstRequests);
   return request;
}

async function getRequests () {
  
  const requests = await requestsRepository.getRequests();
  if (requests.length === 0) { 
    throw notFoundError();
  }
  console.log(requests)
  return requests;
}

async function getByIdRequest (idRequest: number) {
  const requests = await requestsRepository.getByIdRequest(idRequest);

  return requests;
}

async function putRequests (idRequest: number, status: string) {
  const requests = await requestsRepository.putRequests(idRequest, status);

  return requests;
}

async function deleteRequest (idRequest:number) {
  const requests = await requestsRepository.deleteRequest(idRequest);

  return requests;
}

const requestsService = { 
  postRequests,
  getRequests,
  putRequests,
  deleteRequest,
  getByIdRequest
}

export default requestsService;