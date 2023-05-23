import { FC } from 'react';
import { NavigationProps } from '../../../shared/navigation/types/navigationTypes';
import WebView from 'react-native-webview';
import { watchWebViewNavigationChange } from '../model/watchWebViewNavigationChange';
import { SafeAreaView, StatusBar } from 'react-native';

export const WebViewScreen: FC<NavigationProps<'WebView'>> = ({ route }) => {
  return (
    <SafeAreaView className={'flex-1'}>
      <StatusBar barStyle={'dark-content'} />
      <WebView
        onNavigationStateChange={watchWebViewNavigationChange}
        useWebView2
        source={{ uri: route.params.url }}
      />
    </SafeAreaView>
  );
};
