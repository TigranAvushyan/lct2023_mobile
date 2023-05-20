import React, { FC, Fragment } from 'react';
import { Login } from '../../../features/auth/ui/Login';
import { VkAuth } from './VkAuth';
import { Text } from 'react-native';
import { ForgotPassword } from './ForgotPassword';
import { useForm } from 'effector-forms';
import {
  forgetPasswordFx,
  loginForm,
  signup,
  vkAuthFx,
} from '../../../entities/auth';
import { SignUp } from './SignUp';
import { Button } from '../../../slices/ui/button/ui/Button';

export const LoginForm: FC = () => {
  const { fields, submit } = useForm(loginForm);
  return (
    <Fragment>
      <Login
        onEmailChange={fields.email.onChange}
        onPasswordChange={fields.password.onChange}
      />
      <ForgotPassword onPress={forgetPasswordFx} />
      <Button
        onPress={() => submit()}
        containerClassName={'mt-3 flex items-center'}
        variant={'success'}
        className={'w-[244px]'}
        title={'Войти'}
      />
      <Text className={'text-center my-3'}>или</Text>
      <VkAuth onPress={vkAuthFx} />
      <SignUp onSignUp={signup} />
    </Fragment>
  );
};
