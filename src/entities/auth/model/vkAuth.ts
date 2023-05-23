import { createEffect, createEvent, forward, sample } from 'effector';
import Url from '../../url/Url';
import { fetchVkAuthLickFx } from '../api/authApi';
import { navigate } from '../../../shared/navigation/rootNavigation';
import {
  NavigationProps,
  NavigationScreens,
} from '../../../shared/navigation/types/navigationTypes';

export const vkAuthButtonClick = createEvent();

export const vkAuthFx = createEffect((redirectUrl: Url) => {
  console.log(redirectUrl.getParams());
});

forward({
  from: vkAuthButtonClick,
  to: fetchVkAuthLickFx,
});

sample({
  clock: fetchVkAuthLickFx.doneData,
  fn: (link) => ({
    name: 'WebView' as NavigationScreens,
    params: { url: link } as unknown as NavigationProps<'WebView'>,
  }),
  target: navigate,
});
