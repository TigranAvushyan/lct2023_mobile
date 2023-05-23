import React from 'react';
import { AuthFormLayout } from '../../../features/auth/ui/AuthFormLayout';
import { SignupForm } from '../../../widgets/auth/ui/signup/SignupForm';
import { vkAuthButtonClick } from '../../../entities/auth/model/vkAuth';

export const SignupScreen = () => {
  return (
    <AuthFormLayout>
      <SignupForm onVkAuthPress={vkAuthButtonClick} />
    </AuthFormLayout>
  );
};
