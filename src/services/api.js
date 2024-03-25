/* eslint-disable no-undef */
import axios from "axios";

const apiUrl = process.env.REACT_APP_BASE_URL;

export default axios.create({
  baseURL: apiUrl,
});
