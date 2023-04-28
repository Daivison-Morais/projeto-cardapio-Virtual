"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}
exports.notFoundError = notFoundError;
