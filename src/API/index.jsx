import axios from "axios";

export const API_LINK = "http://192.168.30.103:3001";
export const API_KEY = "api_key=7bc4b591e6a52add38951fed88df21fd";
export const baseURLFake = "https://api.themoviedb.org/3/";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default axios.create({
  baseURL: `http://192.168.30.103:8081`,
});
