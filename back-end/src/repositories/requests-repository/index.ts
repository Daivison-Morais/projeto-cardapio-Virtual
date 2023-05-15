import { prisma } from "@/config";
import { RequestUser } from "@/protocols";

async function postRequests(lstRequests: RequestUser) {
  return await prisma.requests.create({
    data: {
      ...lstRequests,
    },
  });
}

export async function getRequests() {
  return await prisma.requests.findMany();
}

export async function getByIdRequest(idRequest: number) {
  return await prisma.requests.findUnique({
    where: {
      id: idRequest,
    },
  });
}

async function putRequests(idRequest: number, status: string) {
  return await prisma.requests.update({
    where: {
      id: idRequest,
    },
    data: {
      status: status,
    },
  });
}

async function deleteRequest(idRequest: number) {
  return await prisma.requests.delete({
    where: {
      id: idRequest,
    },
  });
}

//export type CreateTicketParams = Omit<Ticket, "id" | "createdAt" | "updatedAt">

const requestsRepository = {
  postRequests,
  getRequests,
  putRequests,
  deleteRequest,
  getByIdRequest,
};
export default requestsRepository;
