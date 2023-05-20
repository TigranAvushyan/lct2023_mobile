import { JWTToken } from '../../entities/auth/types/loginTypes';

export const JWT_TOKEN = 'JWT_TOKEN';

export interface StorageType {
  [JWT_TOKEN]: JWTToken;
}

export type StorageKeys = keyof StorageType;

export type StorageItemType<Key extends StorageKeys> = StorageType[Key];
