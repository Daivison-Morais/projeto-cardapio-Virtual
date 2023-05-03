import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function postRequest(body) {
    const response = await axios.post(`${baseURL}/requests`, body);
    return response.data;
}