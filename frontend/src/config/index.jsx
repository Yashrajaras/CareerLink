const {default: axios} = require("axios");

export const BASE_URL = "https://careerlink-56f3.onrender.com"

export const clientServer = axios.create({
    baseURL: BASE_URL,
})