import axios from 'axios';
import { API_ENDPOINT } from './../constants.js';
export const request = axios.create({
  baseURL:API_ENDPOINT,
  headers: {
    "Content-Type": "application/json"
  }
})
