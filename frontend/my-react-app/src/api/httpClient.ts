import axios from "axios";

const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3002/' : '/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default httpClient;