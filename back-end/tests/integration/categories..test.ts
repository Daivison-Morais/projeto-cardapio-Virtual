import supertest from "supertest";
import app, { init } from "@/app";
import { cleanDB } from "../helpers";
import httpStatus from "http-status";
import { createProduct } from "../factories/product-factories";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDB();
});

const api = supertest(app);

describe("Get /products", () => {
    it("should respond with status 200", async () => {
        
        const resp = await api.get("/categories");
        expect(resp.statusCode).toBe(httpStatus.OK);
      });
});