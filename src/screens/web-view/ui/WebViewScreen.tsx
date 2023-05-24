import { FC } from 'react';
import { NavigationProps } from '../../../shared/navigation/types/navigationTypes';
import WebView from 'react-native-webview';
import { watchWebViewNavigationChange } from '../model/watchWebViewNavigationChange';
import { SafeAreaView, StatusBar } from 'react-native';
import { useToggle } from '../../../shared/hooks/toggle/useToggle';
import { VkAnimatedLoader } from '../../../shared/vk-loader/ui/VkAnimatedLoader';

export const WebViewScreen: FC<NavigationProps<'WebView'>> = ({ route }) => {
  const { setFalse, active } = useToggle(true);
  const setVkLoadingFalse = () => {
    setTimeout(setFalse, 1300);
  };
  return (
    <>
      <SafeAreaView className={'absolute z-0 w-full h-full flex-1'}>
        <>
          <StatusBar barStyle={'dark-content'} />
          <WebView
            onLoadEnd={setVkLoadingFalse}
            onNavigationStateChange={watchWebViewNavigationChange}
            useWebView2
            source={{ uri: route.params.url }}
          />
        </>
      </SafeAreaView>
      <VkAnimatedLoader
        className={'absolute z-20 w-full h-full'}
        isLoading={active}
      />
    </>
  );
};
