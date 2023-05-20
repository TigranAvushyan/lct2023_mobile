import { createForm } from 'effector-forms';
import { LoginForm } from '../types/loginTypes';
import { forward } from 'effector';
import { createJwtFx } from '../api/authApi';

export const loginForm = createForm<LoginForm>({
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

forward({
  from: createJwtFx.doneData,
  to: loginForm.reset,
});

createJwtFx.failData.watch(console.log);
