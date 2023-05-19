import { createNavigationContainerRef } from '@react-navigation/native';
import {
  NavigationParamList,
  NavigationProps,
  NavigationScreens,
} from './types/navigationTypes';

export const navigationRef =
  createNavigationContainerRef<NavigationParamList>();

export function navigate<Screen extends NavigationScreens>(
  name: Screen,
  params?: NavigationProps<Screen>
) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
}
