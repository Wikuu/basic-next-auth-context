// ** Type Imports
import type { LoginData } from '../types/client/auth/login';

type User = {
  fullName: string;
  token: string;
};

export type DefaultValue = {
  user: null | User;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
};
