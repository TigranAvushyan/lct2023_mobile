import { createForm } from 'effector-forms';
import { ForgotPasswordForm } from '../types/loginTypes';
import { createEffect, forward, sample } from 'effector';
import { http } from '../../server/model/http';
import { urls } from '../../../shared/constants/apiUrls';
import {
  NavigationProps,
  NavigationScreens,
} from '../../../shared/navigation/types/navigationTypes';
import { navigate } from '../../../shared/navigation/rootNavigation';

export const forgotPasswordForm = createForm<ForgotPasswordForm>({
  fields: {
    email: {
      init: '',
      rules: [
        { name: 'required', validator: (value) => !!value },
        {
          name: 'email',
          validator: (value) => /\S+@\S+\.\S+/.test(value),
        },
      ],
    },
  },
  validateOn: ['submit'],
});
const resetPasswordFx = createEffect(async (data: ForgotPasswordForm) => {
  await http.post(urls.resetPassword(), data);
  return data;
});

forward({
  from: forgotPasswordForm.formValidated,
  to: resetPasswordFx,
});

sample({
  clock: resetPasswordFx.doneData,
  fn: (data) => ({
    name: 'WaitEmailConfirm' as NavigationScreens,
    params: {
      email: data.email,
    } as unknown as NavigationProps<'WaitEmailConfirm'>,
  }),
  target: navigate,
});
