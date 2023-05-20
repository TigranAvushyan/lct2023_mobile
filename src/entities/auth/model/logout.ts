import { createEffect } from 'effector';
import { navigate } from '../../../slices/navigation/rootNavigation';
import { JWT_TOKEN } from '../../../slices/constants/storageType';
import { removeStorageItemFx } from '../../storage/storageMethods';

export const logout = createEffect(async () => {
  removeStorageItemFx(JWT_TOKEN);
  navigate('Login');
});
