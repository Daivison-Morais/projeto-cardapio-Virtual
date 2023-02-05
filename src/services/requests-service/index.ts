import { notFoundError } from "@/errors";
import requestsRepository from "@/repositories/requests-repository";

async function postRequests (lstRequests:any) {
   await requestsRepository.postRequests(lstRequests);
}

async function getRequests () {
  const requests = await requestsRepository.getRequests();

  if (requests.length === 0) { 
    throw notFoundError();
  }
  return requests;
}

const requestsService = { 
  postRequests,
  getRequests
}

export default requestsService;