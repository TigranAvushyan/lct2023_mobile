import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationParamList } from '../../../slices/navigation/types/navigationTypes';
import { LoginScreen } from '../../../screens/login';
import { HomeScreen } from '../../../screens/home';
import { navigationRef } from '../../../slices/navigation/rootNavigation';
import { SignupScreen } from '../../../screens/signup';

const Stack = createStackNavigator<NavigationParamList>();
export const NavigationProvider: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false, header: () => null }}
        initialRouteName={'Login'}
      >
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Signup'} component={SignupScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
