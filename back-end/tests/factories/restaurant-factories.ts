import { prisma } from "@/config";
import { faker } from "@faker-js/faker";
import { restaurants } from "@prisma/client";


  export async function createRestaurant():Promise<restaurants>{
    return await prisma.restaurants.create({
        data: {
          name: faker.commerce.department(),
          password: faker.internet.password(8)
        },
      });
    };
  