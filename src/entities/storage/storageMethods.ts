import { createEffect } from 'effector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StorageItemType,
  StorageKeys,
} from '../../shared/constants/storageType';

export const setStorageItemFx = createEffect(
  async <Key extends StorageKeys>({
    key,
    value,
  }: {
    key: Key;
    value: StorageItemType<Key> | null;
  }) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
);

export const removeStorageItemFx = createEffect(
  async <Key extends StorageKeys>(key: Key) => {
    await AsyncStorage.removeItem(key);
  }
);

export const getStorageItemFx = createEffect(
  async <Key extends StorageKeys>(
    key: Key
  ): Promise<StorageItemType<Key> | null> => {
    const res = await AsyncStorage.getItem(key);
    return res ? JSON.parse(res) : null;
  }
);
