import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function postLoginAdmin(body) {
  
  const response = await axios
    .post(`${baseURL}/signinAdm`, body)
  return response.data;
}
