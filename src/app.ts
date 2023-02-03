import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { connectDb, disconnectDB } from "./config/database";

import {
  categoriesRouter,
  productsRouter
} from "@/routers";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/categories", categoriesRouter)
  .use("/products", productsRouter)

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;