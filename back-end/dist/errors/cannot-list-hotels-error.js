"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerNotTicket = exports.customerNotPayment = exports.cannotListHotelsError = void 0;
function cannotListHotelsError() {
    return {
        name: "cannotListHotelsError",
        message: "Cannot list hotels!",
    };
}
exports.cannotListHotelsError = cannotListHotelsError;
function customerNotPayment() {
    return {
        name: "customerNotPayment",
        message: "Cannot list hotels!"
    };
}
exports.customerNotPayment = customerNotPayment;
function customerNotTicket() {
    return {
        name: "customerNotTicket",
        message: "Cannot list hotels!"
    };
}
exports.customerNotTicket = customerNotTicket;
