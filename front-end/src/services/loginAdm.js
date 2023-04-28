import axios from "axios";
import { baseURL } from "./api";

export async function postLoginAdmin(body) {
  
  const response = await axios
    .post(`${baseURL}/signinAdm`, body)
  return response.data;
}
