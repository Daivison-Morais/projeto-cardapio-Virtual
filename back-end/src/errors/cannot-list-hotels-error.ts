import { ApplicationError } from "@/protocols";

export function cannotListHotelsError(): ApplicationError {
  return {
    name: "cannotListHotelsError",
    message: "Cannot list hotels!",
  };
}

export function customerNotPayment(): ApplicationError {
  return {
    name: "customerNotPayment",
    message: "Cannot list hotels!"
  };
}

export function customerNotTicket(): ApplicationError {
  return {
    name: "customerNotTicket",
    message: "Cannot list hotels!"
  };
}
