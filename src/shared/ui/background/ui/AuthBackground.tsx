import { Image, View } from 'react-native';
import { BranchIcon } from '../../../icons/branch/BranchIcon';
import { AppLogo } from '../../../icons/logo/AppLogo';
export const AuthBackground = () => {
  return (
    <View className={'absolute top-0 left-0'}>
      <BranchIcon />
      <View className={'absolute w-full pt-4 px-8 top-16'}>
        <AppLogo />
      </View>
      <Image
        resizeMode={'contain'}
        source={require('../../../assets/img/violin.png')}
      />
    </View>
  );
};
