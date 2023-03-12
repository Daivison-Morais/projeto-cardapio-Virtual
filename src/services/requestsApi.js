import axios from "axios";
import { baseURL } from "./api";

export async function getRequests() {
    const response = await axios.get(`${baseURL}/requests`);
    return response.data;
}

export async function getByIdRequests(idRequest) {
    const response = await axios.get(`${baseURL}/requests/${idRequest}`);
    return response.data;
}

export async function putRequests(body) {
    const response = await axios.put(`${baseURL}/requests`, body);
    return response.data;
}

export async function deleteRequests(idRequests) {
    console.log(idRequests)
    const response = await axios.delete(`${baseURL}/requests/delete/${idRequests}`);
    return response.data;
}
