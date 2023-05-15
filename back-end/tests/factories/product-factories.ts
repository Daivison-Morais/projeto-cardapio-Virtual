import { prisma } from "@/config";
import { faker } from "@faker-js/faker";
import { product } from "@prisma/client";
import { createCategories } from "./categories-factories";

export async function createProduct (): Promise<product>{
    const category = await createCategories();
    return await prisma.product.create({
        data: {
            name: faker.commerce.productName(),
            imgUrl: faker.internet.url(),
            description: "boom",
            price: Number(faker.commerce.price()),
            categoriesId: category.id
        }
    })
}