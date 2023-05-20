import React, { FC } from 'react';
import { Button } from '../../../slices/ui/button/ui/Button';
import { VkIcon } from '../../../slices/icons/vk/VkIcon';

interface Props {
  onPress: () => void;
}
export const VkAuth: FC<Props> = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      rightIcon={VkIcon}
      containerClassName={'flex items-center'}
      className={'bg-vk px-8'}
      titleClassName={'text-sm uppercase mr-3'}
      variant={'success'}
      title={'войти через'}
    />
  );
};
