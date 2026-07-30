import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:5000/api",

    timeout: 3000

});

export default API;
