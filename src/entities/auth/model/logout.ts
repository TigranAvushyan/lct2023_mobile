import { createEffect } from 'effector';
import { navigate } from '../../../shared/navigation/rootNavigation';
import { JWT_TOKEN } from '../../../shared/constants/storageType';
import { removeStorageItemFx } from '../../storage/storageMethods';

export const logout = createEffect(async () => {
  removeStorageItemFx(JWT_TOKEN);
  navigate({ name: 'Login' });
});
