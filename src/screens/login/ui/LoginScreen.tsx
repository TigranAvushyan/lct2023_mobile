import { View, Text } from 'react-native';
import { Input } from '../../../slices/ui/input';
import React from 'react';
import { Button } from '../../../slices/ui/button/ui/Button';
import { VkIcon } from '../../../slices/icons/vk/VkIcon';

export const LoginScreen = () => {
  return (
    <View className='relative flex-1'>
      <View className='absolute p-7 bottom-0 h-2/5 bg-purple w-full'>
        <Input inputMode={'email'} placeholder={'Email-адрес'} />
        <Input
          secureTextEntry={true}
          className={'mt-3'}
          placeholder={'Пароль'}
        />
        <Button
          onPress={() => {
            console.log(1234);
          }}
          variant={'link'}
          leftIcon={VkIcon}
        >
          Hello
        </Button>
      </View>
    </View>
  );
};
