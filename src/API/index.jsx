import axios from "axios";

export const API_LINK = "http://192.168.30.103:8081";

export default axios.create({
  baseURL: `http://192.168.30.103:8081`,
});
