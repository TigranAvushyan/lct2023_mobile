import React, { FC, Fragment } from 'react';
import { Input } from '../../../shared/ui/input';

interface Props {
  onEmailChange: (e: string) => void;
  onPasswordChange: (e: string) => void;
}

export const Login: FC<Props> = ({ onPasswordChange, onEmailChange }) => {
  return (
    <Fragment>
      <Input
        onChangeText={onEmailChange}
        inputMode={'email'}
        placeholder={'Email-адрес'}
      />
      <Input
        onChangeText={onPasswordChange}
        secureTextEntry={true}
        className={'mt-3'}
        placeholder={'Пароль'}
      />
    </Fragment>
  );
};
