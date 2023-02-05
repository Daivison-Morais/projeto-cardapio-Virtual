import axios from "axios";
import { baseURL } from "./api";

export async function getRequests() {
    const response = await axios.get(`${baseURL}/requests`);
    return response.data;
}

export async function putRequests(idRequests) {
    const response = await axios.get(`${baseURL}/requests/${idRequests}`);
    return response.data;
}

export async function deleteRequests(idRequests) {
    const response = await axios.delete(`${baseURL}/requests/delete/${idRequests}`);
    return response.data;
}
