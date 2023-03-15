import { prisma } from "@/config";

async function findRestaurant(name: string) {
  return prisma.restaurants.findFirst({
    where: {
      name,
    },
  });
}

async function createSession(restaurantId: number, token: string) {
  return prisma.sessions.create({
    data: {
      restaurantId,
      token,
    },
  });
}

async function existSession(restaurantId: number) {
    return prisma.sessions.findFirst({
      where: {
        restaurantId,
      },
    });
  }

const signinRepository = {
  findRestaurant,
  createSession,
  existSession
};

export default signinRepository;
