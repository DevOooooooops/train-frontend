import axios from 'axios';

const baseURL = '192.168.0.244:8080';

export const apiBase = axios.create({
  baseURL,
});
