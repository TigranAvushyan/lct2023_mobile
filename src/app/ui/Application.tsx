import { FC } from 'react';
import { NavigationProvider } from '../providers/NavigationProvider';
import { Text } from 'react-native';

export const Application: FC = () => {
  return (
    <NavigationProvider>
      <Text>hello</Text>
    </NavigationProvider>
  );
};
