export interface LoginForm {
  email: string;
  password: string;
}
export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface JWTToken {
  access: string;
  refresh: string;
}
