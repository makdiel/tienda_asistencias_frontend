import axios from "axios";
const api = axios.create({ 
  baseURL: "http://192.168.1.34:5000/api", 
  // baseURL : 'https://abcd1234.ngrok.io/api',

  timeout: 5000 
});
export default api;