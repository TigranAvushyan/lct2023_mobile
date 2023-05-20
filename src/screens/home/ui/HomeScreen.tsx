import { Button, Text } from 'react-native';
import { navigate } from '../../../slices/navigation/rootNavigation';

export const HomeScreen = () => {
  return <Button title={'logout'} onPress={() => navigate('Login')} />;
};
