import React, { createContext, useContext, useEffect, useState } from 'react';
import { registerFetch } from '../Api/User/register';
import { AuthContextType, LoginParams, RegisterParams, User } from '../Types';
import { toast } from 'react-toastify';
import { getUserFromServer } from '../Api/User/get-user';
import { API_CONFIG } from '../Api/config';

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(null);

  const authToken = user?.token;

  useEffect(() => {
    const maybeUser = localStorage.getItem('user');
    if (maybeUser) {
      setUser(JSON.parse(maybeUser));
    }
  }, []);

  //* get help typing this
  const logIn = async ({ username, password }: LoginParams) => {
    try {
      await getUserFromServer({ username, password }).then((user) =>
        setUser(user)
      );
    } catch (error) {
      console.error(error);
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
