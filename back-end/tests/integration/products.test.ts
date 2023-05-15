import supertest from "supertest";
import app, { init } from "@/app";
import { prisma } from "@/config";
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

describe("Post /products", () => {
  it("should respond with status 200", async () => {
    const product = await createProduct();
    
    const resp = await api.get(`/products/${product.categoriesId}`);
    const result = await prisma.product.count();
    expect(resp.statusCode).toBe(httpStatus.OK);
    expect(result).toBe(1);
  });
});
