import { NativeStackScreenProps } from 'react-native-screens/native-stack';

export type NavigationParamList = {
  Signup: undefined;
  Login: undefined;
  Home: undefined;
};

export type NavigationScreens = keyof NavigationParamList;

export type NavigationProps<Key extends NavigationScreens> =
  NativeStackScreenProps<NavigationParamList, Key>;
