"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { conflictError, notFoundError } from "@/errors";
const errors_1 = require("@/errors");
const categories_repository_1 = __importDefault(require("@/repositories/categories-repository"));
async function getCategories() {
    const lstCategories = await categories_repository_1.default.getCategories();
    if (!lstCategories) { //.length
        throw (0, errors_1.notFoundError)();
    }
    return lstCategories;
}
const categoriesService = {
    getCategories
};
exports.default = categoriesService;
