import { createForm } from 'effector-forms';
import { ILogin } from '../types/loginTypes';
import { createEffect, forward } from 'effector';

export const createJwtFx = createEffect((data: ILogin) => {
  return data;
});

export const loginForm = createForm<ILogin>({
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
    password: {
      init: '',
      rules: [{ name: 'required', validator: (value) => !!value }],
    },
  },
});

forward({
  from: loginForm.formValidated,
  to: createJwtFx,
});
