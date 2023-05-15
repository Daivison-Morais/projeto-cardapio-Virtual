import { prisma } from "@/config";
import { restaurants } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import { createRestaurant } from "./factories/restaurant-factories";
import { createSession } from "./factories/sessions-factories";

export async function cleanDB() {
  await prisma.historic.deleteMany({});
  await prisma.sessions.deleteMany({});
  await prisma.requests.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.categories.deleteMany({});
  await prisma.restaurants.deleteMany({});
}

export async function generateValidToken(restaurant?: restaurants) {
  const incomingRestaurant = restaurant || (await createRestaurant());
  const token = jwt.sign({ restaurantId: incomingRestaurant.id }, process.env.JWT_SECRET);

  await createSession(token);

  return token;
}