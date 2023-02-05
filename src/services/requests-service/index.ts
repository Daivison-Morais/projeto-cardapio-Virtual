import { notFoundError } from "@/errors";
import requestsRepository from "@/repositories/requests-repository";

async function postRequests (lstRequests:any) {
   await requestsRepository.postRequests(lstRequests);
}

const requestsService = { 
  postRequests
}

export default requestsService;