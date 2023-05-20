import { createEffect } from 'effector';
import { createForm } from 'effector-forms';
import { SignupForm } from '../types/loginTypes';

export const signup = createEffect(() => {
  console.log('signup');
});

export const signupForm = createForm<SignupForm>({
  fields: {
    name: {
      init: '',
      rules: [{ name: 'required', validator: (value) => !!value }],
    },
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
    confirmPassword: {
      init: '',
      rules: [
        { name: 'required', validator: (value) => !!value },
        {
          name: 'confirmPassword',
          validator: (value, form: SignupForm) => value === form.password,
        },
      ],
    },
  },
  validateOn: ['change'],
});
