"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidDataError = void 0;
function invalidDataError(details) {
    return {
        name: "InvalidDataError",
        message: "Invalid data",
        details,
    };
}
exports.invalidDataError = invalidDataError;
