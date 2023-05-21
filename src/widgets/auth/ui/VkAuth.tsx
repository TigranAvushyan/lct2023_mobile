import React, { FC } from 'react';
import { VkIcon } from '../../../shared/icons/vk/VkIcon';
import { Button } from '../../../shared/ui/button/ui/Button';

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
