import supertest from "supertest";
import app, { init } from "@/app";
import { prisma } from "@/config";
import { cleanDB, generateValidToken } from "../helpers";

import { createSession } from "../factories/sessions-factories";
import httpStatus from "http-status";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDB();
});

const api = supertest(app);

describe("Post /requests", () => {
  it("should respond with status 400 if no body", async () => {
    const resp = await api.post("/requests");
    const result = await prisma.requests.count();
    expect(resp.status).toBe(httpStatus.BAD_REQUEST);
    expect(result).toBe(0);
  });

  it("should respond with status 201", async () => {

    const token = "hbdhbd4454d654.sfdf"
    const session = await createSession(token);

    const body = {
      description: "ok",
      listRequests:
        "Lasanha de frango (300g), Copo de suco de maracujá (300 ml), ",
      restaurantId: session.restaurantId,
      status: "waiting",
      tableNumber: 2,
      totalPrice: 1500,
    };

    const result = await api.post("/requests").send(body);
    expect(result.status).toBe(httpStatus.CREATED);
  });
});

describe("Get /requests", ()=>{
   it("should respond with status 200, if token valid", async () => {

    const token = await generateValidToken();

    const result = await api.get("/requests").set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(httpStatus.OK);

  }) 

  it("should respond with status 401 if no token is given", async () => {
    const response = await api.get("/requests");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401, if token is invalid", async () => {

    const token = await generateValidToken();

    const result = await api.get("/requests").set("Authorization", `Bearer `);
    expect(result.status).toBe(httpStatus.UNAUTHORIZED);

  }) 
})
