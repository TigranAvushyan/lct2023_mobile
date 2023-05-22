import { FC } from 'react';
import { Image, View, Text } from 'react-native';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

interface Props {
  background: ImageSourcePropType;
  title: string;
  description: string;
}
export const Card: FC<Props> = ({ description, background, title }) => {
  return (
    <View className={'relative my-1 shadow-inner w-full rounded-md'}>
      <Image source={background} />
      <View className={'absolute bottom-1 p-2'}>
        <Text className={'font-bold text-2xl text-white mb-2'}>{title}</Text>
        <Text className={'text-white'}>{description}</Text>
      </View>
    </View>
  );
};
