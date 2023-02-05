import axios from "axios";
import { baseURL } from "./api";

export async function getCategories() {
    const response = await axios.get(`${baseURL}/categories`);
    return response.data;
}

export async function getProducts(categoryId) {
    const response = await axios.get(`${baseURL}/products/${categoryId}`);
    return response.data;
}

