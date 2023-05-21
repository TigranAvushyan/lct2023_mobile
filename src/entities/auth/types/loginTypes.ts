export interface LoginForm {
  email: string;
  password: string;
}
export interface SignupForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface JWTToken {
  access: string;
  refresh: string;
}
