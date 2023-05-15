import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function postRequest(body) {
    const response = await axios.post(`${baseURL}/requests`, body);
    return response.data;
}

export async function getRequests(token) {
    const response = await axios.get(`${baseURL}/requests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
}

export async function getByIdRequests(idRequest) {
    const response = await axios.get(`${baseURL}/requests/${idRequest}`);
    return response.data;
}

export async function putRequests(body, token) {
    const response = await axios.put(`${baseURL}/requests`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
}

export async function deleteRequests(idRequests, token) {
    const response = await axios.delete(`${baseURL}/requests/delete/${idRequests}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
}
