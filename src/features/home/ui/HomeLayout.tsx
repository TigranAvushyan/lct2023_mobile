import { FC, ReactNode } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { AppLogo } from '../../../shared/icons/logo/AppLogo';

interface Props {
  title: string;
  children: ReactNode;
}
export const HomeLayout: FC<Props> = ({ title, children }) => {
  return (
    <View>
      <SafeAreaView className={'bg-purple'}>
        <StatusBar barStyle={'light-content'} />
        <View
          className={
            'flex flex-row justify-center items-center relative h-[56px]'
          }
        >
          <AppLogo className={'w-[88px] h-[40px] absolute left-[25px]'} />

          <Text className={'text-white font-bold text-2xl'}>{title}</Text>
        </View>
      </SafeAreaView>
      <View>{children}</View>
    </View>
  );
};
