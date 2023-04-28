"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const categories_service_1 = __importDefault(require("@/services/categories-service"));
const http_status_1 = __importDefault(require("http-status"));
//CONTROLLER
async function getCategories(req, res) {
    try {
        const lstCategories = await categories_service_1.default.getCategories();
        return res.status(http_status_1.default.OK).send(lstCategories);
    }
    catch (error) {
        return res.sendStatus(http_status_1.default.NO_CONTENT);
    }
}
exports.getCategories = getCategories;
