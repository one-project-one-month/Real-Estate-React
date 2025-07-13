import axios from "axios";

export const appAxios = axios.create({
  baseURL: process.env.EXPRESS_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
