import axios from "axios";

// this file is for centralized Axios configuration
// will include handling common responses like 404/401 (for later)
// will handle common token logic (for later)

const appAxios = axios.create({
  baseURL: "backend url",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default appAxios;
