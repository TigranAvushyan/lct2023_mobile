import React, { FC } from 'react';
import { Button } from '../../../slices/ui/button/ui/Button';

interface Props {
  onPress: () => void;
}
export const ForgotPassword: FC<Props> = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      className={'mt-3 justify-end'}
      variant={'link'}
      title={'Забыл пароль?'}
    />
  );
};
