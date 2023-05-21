import { Image } from 'react-native';
import { ImageProps } from 'react-native/Libraries/Image/Image';
import { FC } from 'react';

export const AppLogo: FC<Omit<ImageProps, 'source'>> = (props) => {
  return (
    <Image
      resizeMode={'contain'}
      className={'w-full'}
      {...props}
      source={require('../../assets/img/logo.png')}
    />
  );
};
