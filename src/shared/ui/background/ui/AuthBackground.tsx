import { Image, View } from 'react-native';
import { AuthLogo } from '../../../icons/logo/AuthLogo';
import { BranchIcon } from '../../../icons/branch/BranchIcon';
export const AuthBackground = () => {
  return (
    <View className={'absolute top-0 left-0'}>
      <BranchIcon />
      <Image
        resizeMode={'contain'}
        source={require('../../../assets/img/violin.png')}
        className={'-translate-y-16'}
      />
      <AuthLogo />
    </View>
  );
};
