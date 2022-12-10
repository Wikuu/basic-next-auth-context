// ** React Imports
import { createContext, useEffect, useState } from 'react';

// ** Type Imports
import type { LoginData } from '../types/client/auth/login';
import type { DefaultValue } from './types';

// ** Third Party Imports
import axios from 'axios';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

// ** Default Value for Context API
const defaultValue: DefaultValue = {
  user: null,
  login: () => Promise.resolve(),
  logout: () => null,
};

const AuthContext = createContext(defaultValue);

const AuthProvider = (props: Props) => {
  // ** Props
  const { children } = props;

  // ** States
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if token exists in local storage and user is not null. If not, redirect to login page
    const token = localStorage.getItem('token');
    if (!token || !user) {
      logout();
    }
  }, []);

  // ** Hooks
  const router = useRouter();

  const login = async (data: LoginData) => {
    await axios
      .post('/api/auth/login', data)
      .then((res) => {
        // Set user data to state and token to local storage. Then redirect to home page
        setUser({ ...res.data });
        localStorage.setItem('token', res.data.token);
        router.push('/');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const logout = () => {
    // Remove user data from state and token from local storage. Then redirect to login page
    setUser(null);
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  const values = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
