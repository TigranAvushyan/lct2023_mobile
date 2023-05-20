import { FC } from 'react';
import { NavigationProvider } from '../providers/navigation/NavigationProvider';

export const Application: FC = () => {
  return <NavigationProvider />;
};
