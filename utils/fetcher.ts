import apiClient from "@/libs/http";
import axios from "axios";

const fetcher = (url: string, token: string) => axios.get(url, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}).then((res) => res.data);

export default fetcher;
