import { View } from 'react-native';
import React from 'react';
import { LoginForm } from '../../../widgets/auth';
import { AuthBackground } from '../../../slices/ui/background/ui/AuthBackground';

export const LoginScreen = () => {
  return (
    <View className='relative flex-1'>
      <AuthBackground />
      <View className='absolute z-10 px-6 pt-12 bottom-0 h-2/4 rounded-t-lg bg-purple w-full'>
        <LoginForm />
      </View>
    </View>
  );
};
