import { createEffect } from 'effector';
import { JWTToken, LoginForm, VkAuthLink } from '../types/loginTypes';
import { http } from '../../server/model/http';
import { urls } from '../../../shared/constants/apiUrls';
import { getStorageItemFx } from '../../storage/storageMethods';
import { JWT_TOKEN } from '../../../shared/constants/storageType';

export const createJwtFx = createEffect(async (data: LoginForm) => {
  const res = await http.post<JWTToken>(urls.jwtCreate(), data);
  return res.data;
});

export const verifyJwtFx = createEffect(async () => {
  const jwt = await getStorageItemFx(JWT_TOKEN);
  if (jwt) {
    return await http.post<boolean>(urls.jwtVerify(), { token: jwt.access });
  }
  throw new Error('Jwt token does not exist');
});

export const refreshJwtFx = createEffect(async () => {
  const jwt = await getStorageItemFx(JWT_TOKEN);
  if (jwt) {
    const res = await http.post<JWTToken>(urls.jwtRefresh(), {
      token: jwt.refresh,
    });
    return res.data;
  }
  throw new Error('Jwt token does not exist');
});

export const fetchVkAuthLickFx = createEffect(async () => {
  const res = await http.get<VkAuthLink>(urls.vkAuthLink());
  return res.data.link;
});
