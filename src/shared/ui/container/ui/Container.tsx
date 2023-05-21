import { View } from 'react-native';
import { FC, ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
export const Container: FC<Props> = ({ children }) => {
  return <View className={'px-[25px]'}>{children}</View>;
};
