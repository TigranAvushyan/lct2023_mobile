import { createEffect } from 'effector';
import { navigate } from '../../../slices/navigation/rootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JWT_TOKEN } from '../../../slices/constants/storageKey';

export const logout = createEffect(async () => {
  await AsyncStorage.removeItem(JWT_TOKEN);
  navigate('Login');
});
