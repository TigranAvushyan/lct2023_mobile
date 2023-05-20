import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../../slices/ui/input';
import { SubmitButton } from '../../../slices/ui/button/ui/SubmitButton';
import { VkAuth } from './VkAuth';
import { vkAuthFx } from '../../../entities/auth';

export const SignupForm = () => {
  return (
    <View>
      <Text className={'text-white text-lg text-center mb-6 font-bold'}>
        Регистрация
      </Text>
      <Input placeholder={'Введи своё имя'} className={'my-2'} />
      <Input
        keyboardType={'email-address'}
        placeholder={'Введи свой email-адрес'}
        className={'my-2'}
      />
      <Input
        secureTextEntry
        placeholder={'Придумай пароль'}
        className={'my-2'}
      />
      <Input
        secureTextEntry
        placeholder={'Повтори пароль'}
        className={'my-2'}
      />
      <SubmitButton />
      <Text className={'text-center my-3'}>или</Text>
      <VkAuth onPress={vkAuthFx} />
    </View>
  );
};
