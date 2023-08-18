import { prisma } from "@/config";
import { faker } from "@faker-js/faker";

export async function createRestaurant() {
  return await prisma.restaurants.create({
    data: {
      name: faker.commerce.department(),
      password: faker.internet.password(8),
    },
  });
}
