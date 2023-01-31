"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const config_1 = require("@/config");
//REPOSITORIO
async function getCategories() {
    return config_1.prisma.categories.findMany();
}
exports.getCategories = getCategories;
const categoriesRepository = {
    getCategories
};
exports.default = categoriesRepository;
