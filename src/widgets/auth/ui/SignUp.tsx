import { FC } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../../slices/ui/button/ui/Button';

interface Props {
  onSignUp: () => void;
}
export const SignUp: FC<Props> = ({ onSignUp }) => {
  return (
    <View className={'flex flex-row justify-center mt-auto mb-12'}>
      <Text className={'mr-2'}>Ещё нет аккаунта?</Text>
      <Button
        onPress={onSignUp}
        variant={'link'}
        titleClassName={'color-black font-bold'}
        title={'Зарегистрироваться'}
      />
    </View>
  );
};
