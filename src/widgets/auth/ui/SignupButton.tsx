import { FC } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../../slices/ui/button/ui/Button';

interface Props {
  onSignUp: () => void;
}
export const SignupButton: FC<Props> = ({ onSignUp }) => {
  return (
    <View className={'flex flex-row justify-center mt-6'}>
      <Text className={'mr-2'}>Ещё нет аккаунта?</Text>
      <Button
        onPress={onSignUp}
        variant={'link'}
        titleClassName={'text-black font-bold'}
        title={'Зарегистрироваться'}
      />
    </View>
  );
};
