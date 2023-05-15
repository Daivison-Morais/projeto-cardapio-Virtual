import { number, string } from "joi";

export type RequestUser = {
  id?: number;
  description?: string;
  listRequests: string;
  restaurantId: number;
  status: string;
  tableNumber: number;
  totalPrice: number;
};

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type Product = {
  id?: number;
  name: string;
  imgUrl: String;
  description?: string;
  price: number;
  categoriesId: number;
}[];
