import { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationParamList } from '../../../shared/navigation/types/navigationTypes';
import { LoginScreen } from '../../../screens/login';
import { HomeScreen } from '../../../screens/home';
import { navigationRef } from '../../../shared/navigation/rootNavigation';
import { SignupScreen } from '../../../screens/signup';
import { LoadingScreen } from '../../../screens/loading/ui/LoadingScreen';
import { WaitEmailConfirmScreen } from '../../../screens/wait-email-confirm/WaitEmailConfirmScreen';
import { WebViewScreen } from '../../../screens/web-view';

const Stack = createStackNavigator<NavigationParamList>();
export const NavigationProvider: FC = () => {
  useEffect(() => {
    // checkAuthAndRedirect();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false, header: () => null }}
        initialRouteName={'Login'}
      >
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'WebView'} component={WebViewScreen} />
        <Stack.Screen name={'Signup'} component={SignupScreen} />
        <Stack.Screen
          name={'WaitEmailConfirm'}
          component={WaitEmailConfirmScreen}
        />
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Loading'} component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
