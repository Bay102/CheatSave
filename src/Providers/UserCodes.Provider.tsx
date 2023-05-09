import React, { createContext, useContext, useState } from 'react';
import { useAuthProvider } from './Auth.Provider.context';
import { getUsersCodes } from '../Api/User/get-users-codes';
import { deleteCheat } from '../Api/User/delete-cheat';
import { CheatCode } from '../Types';

const UserCodesContext = createContext({});

export const UserCodesProvider = ({ children }: { children: JSX.Element }) => {
  const { user }: any = useAuthProvider();
  const [usersCodes, setUsersCodes] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  const consoleOptions = ['XboxOne', 'PS4', 'PC', 'Nintendo Switch'];

  const fetchCodes = () => {
    getUsersCodes(user.id).then((codes) => setUsersCodes(codes));
  };

  const handleDelete = (id: string) => {
    deleteCheat(id).then(() => fetchCodes());
  };

  const filterCodesByGame = (codes: CheatCode[], searchTerm: string) => {
    return codes.filter((code: CheatCode) =>
      code.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCodes = filterCodesByGame(usersCodes, userSearch);

  return (
    <UserCodesContext.Provider
      value={{
        fetchCodes,
        usersCodes: filteredCodes,
        handleDelete,
        userSearch,
        setUserSearch,
        consoleOptions,
      }}
    >
      {children}
    </UserCodesContext.Provider>
  );
};

export const useUserCodesProvider = () => useContext(UserCodesContext);
