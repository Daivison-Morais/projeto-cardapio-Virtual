import supertest from "supertest";
import app, { init } from "@/app";
import { prisma } from "@/config";
import { cleanDB } from "../helpers";
import { createRestaurant } from "../factories/restaurant-factories";
import httpStatus from "http-status";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDB();
});

const api = supertest(app);

describe("POST /signinAdm", () => {
  it("should respond with status 400 if no body", async () => {
    const result = await api.post("/signinAdm");

    expect(result.status).toBe(httpStatus.BAD_REQUEST);
  });

  const body = {
    name: "Pizza teste",
    password: "123456",
  }

  it("should respond with status 200, if successfully logged in", async () => {

    const body = await createRestaurant();
    const resp = await api.post("/signinAdm").send({name: body.name, password: body.password});
    const result = await prisma.sessions.count();
    expect(resp.status).toBe(httpStatus.OK);
    expect(result).toBe(1);
  });

  it("should respond with status 409 if wrong name", async () => {
    
    await prisma.restaurants.create({
      data: {
        name: "Pizza testtss",
        password: "123456",
      },
    });

    const resp = await api.post("/signinAdm").send(body);
    const result = await prisma.sessions.count();

    expect(resp.status).toBe(httpStatus.CONFLICT);
    expect(result).toBe(0);
  });

  it("should respond with status 409 if wrong password", async () => {

    await prisma.restaurants.create({
      data: {
        name: "Pizza teste",
        password: "123456abc",
      },
    });

    const resp = await api.post("/signinAdm").send(body);
    const result = await prisma.sessions.count();

    expect(resp.status).toBe(httpStatus.CONFLICT);
    expect(result).toBe(0);
  });
});
