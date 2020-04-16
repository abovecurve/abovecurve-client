import axios from "axios";
const LOCAL_API = "http://localhost:4000";
const API_URL = process.env.REACT_APP_API_URL || LOCAL_API;

export default axios.create({
  baseURL: API_URL,
  responseType: "json",
});
