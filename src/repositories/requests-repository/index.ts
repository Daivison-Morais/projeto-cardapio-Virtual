import {prisma} from "@/config";

async function postRequests (lstRequests: any){
    return prisma.requests.create({
        data: {
            ...lstRequests,
          }
    })
}

const requestsRepository = {
    postRequests
}
export default requestsRepository
