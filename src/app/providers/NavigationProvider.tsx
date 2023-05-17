import { FC } from 'react';
import { Provider } from '../types/provider';
import { NavigationContainer } from '@react-navigation/native';

export const NavigationProvider: FC<Provider> = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
