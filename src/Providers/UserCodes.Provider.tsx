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
  const [consoleFilter, setConsoleFilter] = useState('')

  const fetchCodes = () => {
    getUsersCodes(user.id).then((codes) => setUsersCodes(codes));
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = event.currentTarget.dataset.id;
    deleteCheat(id).then(() => fetchCodes());
  };

  // const filterCodesByGame = (codes: CheatCode[], searchTerm: string) => {
  //   return codes.filter((code: CheatCode) =>
  //     code.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // };

  // const filterCodes = (codes: CheatCode[], searchTerm: string, consoleID: string) => {
  //   if (consoleFilter) {
  //     return codes.filter((code: CheatCode) => code.consoleId === consoleID ) 
  //   }
  //   return codes.filter((code: CheatCode) =>
  //     code.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // };

  const filterCodes = (codes: CheatCode[], searchTerm: string, consoleID: string) => {
    if (searchTerm && consoleID) {
      return codes.filter((code: CheatCode) =>
        code.gameTitle.toLowerCase().includes(searchTerm.toLowerCase()) && code.consoleId === consoleID
      );
    } else if (searchTerm) {
      return codes.filter((code: CheatCode) =>
        code.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (consoleID) {
      return codes.filter((code: CheatCode) => code.consoleId === consoleID);
    }
    return codes;
  };
  
 
  const filteredCodes = filterCodes(usersCodes, userSearch, consoleFilter);

  return (
    <UserCodesContext.Provider
      value={{
        fetchCodes,
        usersCodes: filteredCodes,
        handleDelete,
        userSearch,
        setUserSearch,
        consoleFilter,
        setConsoleFilter
      }}
    >
      {children}
    </UserCodesContext.Provider>
  );
};

export const useUserCodesProvider = () => useContext(UserCodesContext);
