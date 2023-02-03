import {prisma} from "../../config/database";

export async function getproducts (categoryId: number){
    return prisma.product.findMany({
        where: {
            categoriesId: categoryId
        }
    })
}

const productsRepository = {
    getproducts
}
export default productsRepository
