"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflictError = void 0;
function conflictError(message) {
    return {
        name: "ConflictError",
        message,
    };
}
exports.conflictError = conflictError;
