import React, { FC, Fragment } from 'react';
import { Login } from '../../../features/auth/ui/Login';
import { VkAuth } from './VkAuth';
import { Text } from 'react-native';
import { ForgotPasswordButton } from './forget-password/ForgotPasswordButton';
import { useForm } from 'effector-forms';
import { loginForm, vkAuthFx } from '../../../entities/auth';
import { SignupButton } from './signup/SignupButton';
import { SubmitButton } from '../../../shared/ui/button/ui/SubmitButton';
import { navigate } from '../../../shared/navigation/rootNavigation';
import { vkAuthButtonClick } from '../../../entities/auth/model/vkAuth';

type Props = {
  onPressForgotPassword: () => void;
};

export const LoginForm: FC<Props> = ({ onPressForgotPassword }) => {
  const navigateToSignUp = () => {
    navigate({ name: 'Signup' });
  };

  const { fields, submit } = useForm(loginForm);

  return (
    <Fragment>
      <Login
        onEmailChange={fields.email.onChange}
        onPasswordChange={fields.password.onChange}
      />
      <ForgotPasswordButton onPress={onPressForgotPassword} />
      <SubmitButton
        onPress={() => {
          submit();
        }}
        title={'Войти'}
      />
      <Text className={'text-center my-3'}>или</Text>
      <VkAuth onPress={vkAuthButtonClick} />
      <SignupButton onSignUp={navigateToSignUp} />
    </Fragment>
  );
};
