import React from 'react';
import { AuthFormLayout } from '../../../features/auth/ui/AuthFormLayout';
import { SignupForm } from '../../../widgets/auth/ui/SignupForm';

export const SignupScreen = () => {
  return (
    <AuthFormLayout>
      <SignupForm />
    </AuthFormLayout>
  );
};
