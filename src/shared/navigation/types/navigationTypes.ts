import { NativeStackScreenProps } from 'react-native-screens/native-stack';

export type NavigationParamList = {
  Signup: undefined;
  Login: undefined;
  WebView: { url: string };
  WaitEmailConfirm: { email: string };
  Home: undefined;
  Map: undefined;
  Loading: undefined;
};

export type NavigationScreens = keyof NavigationParamList;

export type NavigationProps<Key extends NavigationScreens> =
  NativeStackScreenProps<NavigationParamList, Key>;
