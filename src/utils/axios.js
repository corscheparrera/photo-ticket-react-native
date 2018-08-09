import axios from "axios";

process.env.NODE_ENV = "production";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://photo-ticket.com/api"
    : "http://192.168.0.126:5000/api";

export default (instance = axios.create({
  baseURL
}));
