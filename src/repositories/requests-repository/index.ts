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

const requestsRepository = {
    postRequests,
    getRequests
}
export default requestsRepository
