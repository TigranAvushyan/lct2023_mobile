import { createEvent, forward, sample } from 'effector';
import { createJwtFx, refreshJwtFx, verifyJwtFx } from '../api/authApi';
import { navigate } from '../../../shared/navigation/rootNavigation';
import { NavigationScreens } from '../../../shared/navigation/types/navigationTypes';
import { JWT_TOKEN, StorageKeys } from '../../../shared/constants/storageType';
import { setStorageItemFx } from '../../storage/storageMethods';

export const checkAuthAndRedirect = createEvent();

forward({
  from: checkAuthAndRedirect,
  to: verifyJwtFx,
});

sample({
  clock: [verifyJwtFx.doneData, refreshJwtFx.doneData, createJwtFx.doneData],
  fn: () => ({ name: 'Home' as NavigationScreens }),
  target: navigate,
});

sample({
  clock: verifyJwtFx.fail,
  fn: () => ({ name: 'Login' as NavigationScreens }),
  target: navigate,
});

sample({
  clock: [createJwtFx.doneData, refreshJwtFx.doneData],
  fn: (value) => ({ key: JWT_TOKEN as StorageKeys, value }),
  target: setStorageItemFx,
});
