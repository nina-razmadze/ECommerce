import axios from 'axios';
import { TlogaclStorage } from '../types/localstorage';

export const priviteAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TlogaclStorage.ACCESSTOKEN)}`,
  },
});
