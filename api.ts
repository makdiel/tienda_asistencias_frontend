import axios from "axios";
const api = axios.create({ 
  baseURL: "http://192.168.10.105:25060/api", 
  // baseURL : 'https://abcd1234.ngrok.io/api',

  timeout: 25060 
});
export default api;