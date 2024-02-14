import axios from "axios";

const AxiosInstanceProvider = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_YBIZ_STRAPI_API_URL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

export { AxiosInstanceProvider };