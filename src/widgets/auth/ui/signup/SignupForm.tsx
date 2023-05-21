import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../../../shared/ui/input';
import { SubmitButton } from '../../../../shared/ui/button/ui/SubmitButton';
import { VkAuth } from '../VkAuth';
import { vkAuthFx } from '../../../../entities/auth';
import { useForm } from 'effector-forms';
import { signupForm } from '../../../../entities/auth/model/signup';

export const SignupForm = () => {
  const { fields } = useForm(signupForm);
  return (
    <View>
      <Text className={'text-white text-lg text-center mb-6 font-bold'}>
        Регистрация
      </Text>
      <Input
        placeholder={'Введи своё имя'}
        onChangeText={fields.first_name?.onChange}
        className={'my-2'}
      />
      <Input
        placeholder={'Введи свою фамилию'}
        onChangeText={fields.last_name?.onChange}
        className={'my-2'}
      />
      <Input
        keyboardType={'email-address'}
        placeholder={'Введи свой email-адрес'}
        className={'my-2'}
        onChangeText={fields.email?.onChange}
      />
      <Input
        secureTextEntry
        placeholder={'Придумай пароль'}
        className={'my-2'}
        onChangeText={fields.password?.onChange}
      />
      <Input
        secureTextEntry
        placeholder={'Повтори пароль'}
        className={'my-2'}
        onChangeText={fields.confirmPassword?.onChange}
      />
      <SubmitButton />
      <Text className={'text-center my-3'}>или</Text>
      <VkAuth onPress={vkAuthFx} />
    </View>
  );
};
