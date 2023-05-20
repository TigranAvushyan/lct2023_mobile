import React, { FC, Fragment } from 'react';
import { Login } from '../../../features/auth/ui/Login';
import { VkAuth } from './VkAuth';
import { Text } from 'react-native';
import { ForgotPassword } from './ForgotPassword';
import { useForm } from 'effector-forms';
import { loginForm, vkAuthFx } from '../../../entities/auth';
import { SignupButton } from './SignupButton';
import { SubmitButton } from '../../../slices/ui/button/ui/SubmitButton';
import { navigate } from '../../../slices/navigation/rootNavigation';

export const LoginForm: FC = () => {
  const navigateToSignUp = () => {
    navigate('Signup');
  };

  const { fields, submit } = useForm(loginForm);

  return (
    <Fragment>
      <Login
        onEmailChange={fields.email.onChange}
        onPasswordChange={fields.password.onChange}
      />
      <ForgotPassword onPress={navigateToSignUp} />
      <SubmitButton
        onPress={() => {
          submit();
        }}
        title={'Войти'}
      />
      <Text className={'text-center my-3'}>или</Text>
      <VkAuth onPress={vkAuthFx} />
      <SignupButton onSignUp={navigateToSignUp} />
    </Fragment>
  );
};
