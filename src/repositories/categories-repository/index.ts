import {prisma} from "@/config";

//REPOSITORIO

export async function getCategories (){
    return prisma.categories.findMany()
}

const categoriesRepository = {
    getCategories
}
export default categoriesRepository



