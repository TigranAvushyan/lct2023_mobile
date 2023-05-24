import axios from 'axios';
import { getStorageItemFx } from '../../storage/storageMethods';
import { JWT_TOKEN } from '../../../shared/constants/storageType';
import { BASE_URL } from '../consts/httpConsts';
import { checkAuthAndRedirect } from '../../auth/model/checkAuthAndRedirect';

export const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use(async (config) => {
  const token = await getStorageItemFx(JWT_TOKEN);
  if (token) {
    config!.headers!.Authorization = 'Bearer ' + token.access;
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
        checkAuthAndRedirect();
    }
    return Promise.reject(error);
  }
);
