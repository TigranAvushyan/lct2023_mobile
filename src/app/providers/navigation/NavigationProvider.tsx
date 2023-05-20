import { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationParamList } from '../../../slices/navigation/types/navigationTypes';
import { LoginScreen } from '../../../screens/login';
import { HomeScreen } from '../../../screens/home';
import { navigationRef } from '../../../slices/navigation/rootNavigation';
import { SignupScreen } from '../../../screens/signup';
import { checkAuthAndRedirect } from '../../../entities/auth/model/checkAuthAndRedirect';
import { LoadingScreen } from '../../../screens/loading/ui/LoadingScreen';

const Stack = createStackNavigator<NavigationParamList>();
export const NavigationProvider: FC = () => {
  useEffect(() => {
    // checkAuthAndRedirect();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false, header: () => null }}
        initialRouteName={'Signup'}
      >
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Signup'} component={SignupScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Loading'} component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
