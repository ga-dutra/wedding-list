import axios from "axios";

const instance = axios.create({
  baseURL: "https://wedding-list-backend.vercel.app"
});

export default instance;
