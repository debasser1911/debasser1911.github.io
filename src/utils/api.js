import { apiURL } from "./constants";
const { default: axios } = require("axios");

export const api = () => axios.create({ baseURL: apiURL, headers: {} });
