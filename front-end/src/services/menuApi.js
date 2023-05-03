import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;
export async function getCategories() {
    console.log("base:",baseURL)
    const response = await axios.get(`${baseURL}/categories`);
    return response.data;
}

export async function getProducts(categoryId) {
    const response = await axios.get(`${baseURL}/products/${categoryId}`);
    return response.data;
}

