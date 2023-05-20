import React from 'react';
import { LoginForm } from '../../../widgets/auth';
import { AuthFormLayout } from '../../../features/auth/ui/AuthFormLayout';

export const LoginScreen = () => {
  return (
    <AuthFormLayout>
      <LoginForm />
    </AuthFormLayout>
  );
};
