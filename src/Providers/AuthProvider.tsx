import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, LoginParams, RegisterParams, User } from '../Types';
import { toast } from 'react-toastify';
import { getUserFromServer } from '../Api/User/get-user';
import { API_CONFIG } from '../Api/config';
import { useAppProvider } from './AppProvider';

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const { setShowNav, setDisplay } = useAppProvider();

  const authToken = user?.token;

  useEffect(() => {
    const maybeUser = localStorage.getItem('user');
    if (maybeUser) {
      setUser(JSON.parse(maybeUser));
    }
  }, []);

  const logIn = async ({ username, password }: LoginParams) => {
    try {
      const user = await getUserFromServer({ username, password });
      if (user) {
        setShowNav(false);
        setDisplay('');
        return setUser(user);
      } else toast.error('Incorrect Username/Password');
    } catch (e) {
      console.error(e);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    if (user) {
      toast.info('Logged Out');
    }
  };

  const register = async ({ username, password }: RegisterParams) => {
    await fetch(`${API_CONFIG.baseUrl}user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ authToken, user, setUser, register, logOut, logIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
