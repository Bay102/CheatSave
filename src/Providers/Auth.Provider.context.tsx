import React, { createContext, useContext, useEffect, useState } from 'react';
import { registerFetch } from '../Api/User/register';
import { AuthContextType, RegisterParams } from '../Types';
import { toast } from 'react-toastify';
import { getUserFromServer } from '../Api/User/get-user';
import { checkIfUserExists } from '../Api/check-if-username-isTaken';

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(null);

  const register = async ({ username, password }: RegisterParams) => {
    const UserExists = await checkIfUserExists(username);
    if (username && password) {
      if (!UserExists) {
        return registerFetch({ username, password }).then((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
        });
      }
    } else {
      toast.info('Fields are empty');
    }
  };

  useEffect(() => {
    const maybeUser = localStorage.getItem('user');
    if (maybeUser) {
      setUser(JSON.parse(maybeUser));
    }
  }, []);

  const logIn = async ({ username, password }: { username: string, password: string }) => {
    const user = await getUserFromServer({ username });
    if (user.password !== password) {
      throw new Error('invalid password');
    } else {
      toast.success(`Welcome ${username.toUpperCase()}`);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    if (user) {
      toast.info('Logged Out');
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
