import React, { FC } from 'react';
import { ButtonProps } from '../types/ButtonProps';
import { Button } from './Button';

type Props = ButtonProps;
export const SubmitButton: FC<Props> = (props) => {
  return (
    <Button
      containerClassName={'mt-3 flex items-center'}
      variant={'success'}
      className={'w-[244px]'}
      title={'Отправить'}
      onPress={props.onPress}
      {...props}
    />
  );
};
