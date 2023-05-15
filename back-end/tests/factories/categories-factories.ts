import { categories } from "@prisma/client";
import { createRestaurant } from "./restaurant-factories";
import { prisma } from "@/config";
import { faker } from "@faker-js/faker";

export async function createCategories(): Promise<categories> {
  const restaurant = await createRestaurant();

  return await prisma.categories.create({
    data: {
      name: faker.commerce.productName(),
      imageUrl: faker.internet.url(),
      restaurantId: restaurant.id,
    },
  });
}
