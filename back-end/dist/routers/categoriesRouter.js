"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = require("express");
//import { authenticateToken } from "@/middlewares";
const controllers_1 = require("@/controllers");
const categoriesRouter = (0, express_1.Router)();
exports.categoriesRouter = categoriesRouter;
categoriesRouter
    //.all("/*", authenticateToken)
    .get("", controllers_1.getCategories);
