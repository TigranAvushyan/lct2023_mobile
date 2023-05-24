import { createEffect, createEvent, forward, sample } from 'effector';
import Url from '../../url/Url';
import { fetchVkAuthLickFx } from '../api/authApi';
import { navigate } from '../../../shared/navigation/rootNavigation';
import {
  NavigationProps,
  NavigationScreens,
} from '../../../shared/navigation/types/navigationTypes';
import { JWTToken } from '../types/loginTypes';
import { setStorageItemFx } from '../../storage/storageMethods';
import { JWT_TOKEN, StorageKeys } from '../../../shared/constants/storageType';

export const vkAuthButtonClick = createEvent();

export const vkAuthFx = createEffect((redirectUrl: Url) => {
  return redirectUrl.getParams<JWTToken>();
});

forward({
  from: vkAuthButtonClick,
  to: fetchVkAuthLickFx,
});

sample({
  clock: fetchVkAuthLickFx.doneData,
  fn: (link) => ({
    name: 'WebView' as NavigationScreens,
    params: { url: link } as unknown as NavigationProps<'WebView'>,
  }),
  target: navigate,
});

sample({
  clock: vkAuthFx.doneData,
  fn: () => ({
    name: 'Home' as NavigationScreens,
  }),
  target: navigate,
});

sample({
  clock: vkAuthFx.doneData,
  fn: (jwt) => ({ key: JWT_TOKEN as StorageKeys, value: jwt }),
  target: setStorageItemFx,
});
