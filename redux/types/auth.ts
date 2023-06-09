export interface IUserRegistration {
  fullName: string;
  email: string;
  password: string;
}

export interface IUserAuthorization {
  username: string;
  password: string;
}

export interface IAuthState {
  isToken: string;
  isLoading: boolean;
  error: string;
}
