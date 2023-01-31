"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestError = void 0;
function requestError(status, statusText) {
    return {
        name: "RequestError",
        data: null,
        status,
        statusText,
        message: "No result for this search!",
    };
}
exports.requestError = requestError;
