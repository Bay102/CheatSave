import React, { createContext, useContext, useEffect, useState } from 'react';
import { registerFetch } from '../Api/User/register';
import { AuthContextType, LoginParams, RegisterParams, User } from '../Types';
import { toast } from 'react-toastify';
import { getUserFromServer } from '../Api/User/get-user';

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(null);

  const authToken = user?.token;

  // useEffect(() => {
  //   const maybeUser = localStorage.getItem('user');
  //   if (maybeUser) {
  //     setUser(JSON.parse(maybeUser));
  //   }
  // }, []);

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
  // const register = async ({ username, password }: RegisterParams) => {
  //   const UserExists = await checkIfUserExists(username);
  //   if (username && password) {
  //     if (!UserExists) {
  //       return registerFetch({ username, password }).then((user) => {
  //         localStorage.setItem('user', JSON.stringify(user));
  //         setUser(user);
  //       });
  //     }
  //   } else {
  //     toast.info('Fields are empty');
  //   }
  // };

  const register = async ({ username, password }: RegisterParams) => {
    await fetch('https://localhost:3000/user/create', {
      method: 'POST',
      mode: 'cors',
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
      .then((data) => {
        console.log(data); // Process the response data (created user details)
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
