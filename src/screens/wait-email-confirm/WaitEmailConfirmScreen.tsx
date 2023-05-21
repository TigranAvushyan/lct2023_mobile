import { NavigationProps } from '../../shared/navigation/types/navigationTypes';
import { AuthFormLayout } from '../../features/auth/ui/AuthFormLayout';
import { Text } from 'react-native';

export const WaitEmailConfirmScreen = ({
  route,
}: NavigationProps<'WaitEmailConfirm'>) => {
  return (
    <AuthFormLayout>
      <Text>{route.params.email}</Text>
    </AuthFormLayout>
  );
};
