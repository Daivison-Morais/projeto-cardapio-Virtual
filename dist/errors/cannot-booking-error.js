"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cannotBookingError = void 0;
function cannotBookingError() {
    return {
        name: "CannotBookingError",
        message: "Cannot booking this room! Overcapacity!",
    };
}
exports.cannotBookingError = cannotBookingError;
