import { FC, ReactNode, useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
type Props = {
  children: ReactNode;
};

SplashScreen.preventAutoHideAsync().then();

export const FontFamilyProvider: FC<Props> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <View onLayout={onLayoutRootView}>{children}</View>;
};
