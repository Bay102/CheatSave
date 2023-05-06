import React, { createContext, useContext, useState } from 'react';
import { useAuthProvider } from './Auth.Provider.context';
import { getUsersCodes } from '../Api/User/get-users-codes';

const UserCodesContext = createContext({});

export const UserCodesProvider = ({ children }: { children: JSX.Element }) => {
  const { user }: any = useAuthProvider();
  const [usersCodes, setUsersCodes] = useState([]);

  const fetchCodes = () => {
    getUsersCodes(user.id).then((codes) => setUsersCodes(codes));
  };

  return (
    <UserCodesContext.Provider value={{ fetchCodes, usersCodes, setUsersCodes }}>
      {children}
    </UserCodesContext.Provider>
  );
};

export const useUserCodesProvider = () => useContext(UserCodesContext);
