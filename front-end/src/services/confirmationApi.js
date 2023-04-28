import axios from "axios";
import { baseURL } from "./api";

export async function postRequest(body) {
    const response = await axios.post(`${baseURL}/requests`, body);
    return response.data;
}