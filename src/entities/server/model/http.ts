import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JWT_TOKEN } from '../../../slices/constants/storageKey';
import { logout } from '../../auth/model/logout';

export const http = axios.create({
  baseURL: '',
});

http.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem(JWT_TOKEN);
  if (token) {
    config!.headers!.Authorization = 'TOKEN ' + token;
  }
  return config;
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    switch (error.response.status) {
      case 403:
        await logout();
    }
    return Promise.reject(error);
  }
);
