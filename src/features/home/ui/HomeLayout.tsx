import { FC, ReactNode } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { AppLogo } from '../../../shared/icons/logo/AppLogo';
import { Container } from '../../../shared/ui/container/ui/Container';

interface Props {
  title: string;
  children: ReactNode;
}
export const HomeLayout: FC<Props> = ({ title, children }) => {
  return (
    <View>
      <SafeAreaView className={'bg-purple'}>
        <StatusBar barStyle={'light-content'} />
        <Container>
          <View
            className={
              'flex flex-row justify-center items-center relative h-[56px]'
            }
          >
            <AppLogo className={'w-[88px] h-[40px] absolute left-0'} />

            <Text className={'text-white font-bold text-2xl'}>{title}</Text>
          </View>
        </Container>
      </SafeAreaView>
      <View>{children}</View>
    </View>
  );
};
