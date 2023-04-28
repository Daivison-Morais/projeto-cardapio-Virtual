import {prisma} from "@/config";

async function postRequests (lstRequests: any){
    return prisma.requests.create({
        data: {
            ...lstRequests,
          }
    })

    
}

export async function getRequests (){
    return prisma.requests.findMany()
}

export async function getByIdRequest (idRequest: number){
  return prisma.requests.findUnique({
    where:{
      id: idRequest
    }
  })
}

async function putRequests(idRequest: number, status: string) {
    return prisma.requests.update({
      where: {
        id: idRequest,
      },
      data: {
        status: status,
      }
    });
  }

  async function deleteRequest(idRequest: number) {
    return prisma.requests.delete({
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
    getByIdRequest
}
export default requestsRepository
