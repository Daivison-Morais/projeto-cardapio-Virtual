"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidEmailError = void 0;
function invalidEmailError(email) {
    return {
        name: "InvalidEmailError",
        email: email,
        message: `"${email}" is not a valid email!`,
    };
}
exports.invalidEmailError = invalidEmailError;
