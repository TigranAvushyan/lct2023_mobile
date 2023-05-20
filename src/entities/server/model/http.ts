import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../../auth';
import { getStorageItemFx } from '../../storage/storageMethods';
import { JWT_TOKEN } from '../../../slices/constants/storageType';

export const http = axios.create({
  baseURL: 'https://lev4ek.ru/api',
});

http.interceptors.request.use(async (config) => {
  const token = await getStorageItemFx(JWT_TOKEN);
  if (token) {
    config!.headers!.Authorization = 'TOKEN ' + token.access;
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
