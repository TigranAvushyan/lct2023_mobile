import { WebViewNavigation } from 'react-native-webview';
import Url from '../../../entities/url/Url';
import { WebViewUrls } from '../consts/WebViewUrls';
import { vkAuthFx } from '../../../entities/auth';

export const watchWebViewNavigationChange = (event: WebViewNavigation) => {
  const url = new Url(event.url);
  const baseUrl = url.getBaseUrl();
  switch (baseUrl) {
    case WebViewUrls.VK_OAUTH:
      vkAuthFx(url).then();
      break;
  }
};
