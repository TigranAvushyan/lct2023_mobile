import { createNavigationContainerRef } from '@react-navigation/native';
import {
  NavigationParamList,
  NavigationProps,
  NavigationScreens,
} from './types/navigationTypes';
import { createEffect } from 'effector';

export const navigationRef =
  createNavigationContainerRef<NavigationParamList>();

export const navigate = createEffect(
  <Screen extends NavigationScreens>(
    name: Screen,
    params?: NavigationProps<Screen>
  ) => {
    if (navigationRef.isReady()) {
      // @ts-ignore
      navigationRef.navigate(name, params);
    }
  }
);
