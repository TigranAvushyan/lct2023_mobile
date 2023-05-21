import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../../../shared/ui/input';
import { SubmitButton } from '../../../../shared/ui/button/ui/SubmitButton';
import { useForm } from 'effector-forms';
import { forgotPasswordForm } from '../../../../entities/auth/model/forgotPassword';

export const ForgetPasswordForm = () => {
  const { fields, submit } = useForm(forgotPasswordForm);
  return (
    <View>
      <Text className={'text-white text-lg text-center mb-6 font-bold'}>
        Регистрация
      </Text>
      <Text className={'text-white text-lg text-center mb-6'}>
        Введи email адрес и мы отправим на него ссылку для восстановления пароля
      </Text>
      <Input
        value={fields.email?.value}
        onChangeText={fields.email?.onChange}
        placeholder={'Email-адрес'}
        keyboardType={'email-address'}
      />
      <SubmitButton onPress={() => submit()} />
    </View>
  );
};
