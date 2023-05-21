import React from 'react';
import { ForgetPasswordForm, LoginForm } from '../../../widgets/auth';
import { AuthFormLayout } from '../../../features/auth/ui/AuthFormLayout';
import { useToggle } from '../../../shared/hooks/toggle/useToggle';

export const LoginScreen = () => {
  const { active, setTrue } = useToggle();
  return (
    <AuthFormLayout>
      {active ? (
        <ForgetPasswordForm />
      ) : (
        <LoginForm onPressForgotPassword={setTrue} />
      )}
    </AuthFormLayout>
  );
};
