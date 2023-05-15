import { prisma } from "@/config";

async function findRestaurant (name: string) {

  const teste = await prisma.restaurants.findFirst({
    where: {
      name,
    }
  });

  return teste;
}

async function createSession(restaurantId: number, token: string) {
  return await prisma.sessions.create({
    data: {
      restaurantId,
      token,
    },
  });
}

async function existSession(restaurantId: number) {
    return await prisma.sessions.findFirst({
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
