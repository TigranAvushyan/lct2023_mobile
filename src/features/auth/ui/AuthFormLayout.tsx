import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { AuthBackground } from '../../../slices/ui/background/ui/AuthBackground';

type Props = {
  children: ReactNode;
};

export const AuthFormLayout: FC<Props> = ({ children }) => {
  return (
    <View className='relative flex-1'>
      <AuthBackground />
      <View className='absolute z-10 px-6 pt-8 pb-10 bottom-0 rounded-t-lg bg-purple w-full'>
        {children}
      </View>
    </View>
  );
};
