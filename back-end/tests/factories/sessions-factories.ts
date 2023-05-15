import { prisma } from "@/config";
import { createRestaurant } from "./restaurant-factories";
import { sessions } from "@prisma/client";

export async function createSession(token: string): Promise<sessions> {
  const restaurant = await createRestaurant();

  return prisma.sessions.create({
    data: {
      token: token,
      restaurantId: restaurant.id,
    },
  });
}
