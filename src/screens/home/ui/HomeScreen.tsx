import { Button } from 'react-native';
import { navigate } from '../../../shared/navigation/rootNavigation';

export const HomeScreen = () => {
  return (
    <Button title={'logout'} onPress={() => navigate({ name: 'Login' })} />
  );
};
