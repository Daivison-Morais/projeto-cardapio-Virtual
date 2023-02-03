import axios from "axios";
const baseURL = "http://localhost:4000";

export async function getCategories() {
    const response = await axios.get(`${baseURL}/categories`);
    return response.data;
}

export async function getProducts(categoryId) {
    const response = await axios.get(`${baseURL}/products/${categoryId}`);
    console.log(response.data);
    return response.data;
}

