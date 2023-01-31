import { ApplicationError } from "@/protocols";

export function ticketIsRemote(): ApplicationError {
  return {
    name: "ticketIsRemote",
    message: "Ticket is remote",
  };
}
