import { notFoundError } from "@/errors";
import { RequestUser } from "@/protocols";
import requestsRepository from "@/repositories/requests-repository";

async function postRequests(lstRequests: RequestUser) {
  const request = await requestsRepository.postRequests(lstRequests);
  return request;
}

async function getRequests() {
  const requests = await requestsRepository.getRequests();
  if (!requests) {
    throw notFoundError();
  }
  return requests;
}

async function getByIdRequest(idRequest: number) {
  const requests = await requestsRepository.getByIdRequest(idRequest);

  return requests;
}

async function putRequests(idRequest: number, status: string) {
  const requests = await requestsRepository.putRequests(idRequest, status);

  return requests;
}

async function deleteRequest(idRequest: number) {
  const requests = await requestsRepository.deleteRequest(idRequest);

  return requests;
}

const requestsService = {
  postRequests,
  getRequests,
  putRequests,
  deleteRequest,
  getByIdRequest,
};

export default requestsService;
