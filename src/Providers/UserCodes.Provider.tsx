import React, { createContext, useContext, useState } from 'react';
import { useAuthProvider } from './Auth.Provider.context';
import { getUsersCodes } from '../Api/User/get-users-codes';
import { deleteCheat } from '../Api/User/delete-cheat';
import { CheatCode } from '../Types';

const UserCodesContext = createContext({});

// export const UserCodesProvider = ({ children }: { children: JSX.Element }) => {
//   const { user }: any = useAuthProvider();
//   const [usersCodes, setUsersCodes] = useState([]);
//   const [userSearch, setUserSearch] = useState('');

//   const fetchCodes = () => {
//     getUsersCodes(user.id).then((codes) => setUsersCodes(codes));
//   };

//   const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     const id = event.currentTarget.dataset.id;
//     deleteCheat(id).then(() => fetchCodes());
//   };

//   const handleFilter = () => {
//     const filteredCodes = usersCodes.filter((code: CheatCode) =>
//       code.gameTitle.toLowerCase().includes(userSearch.toLowerCase())
//     );
//     setUsersCodes(filteredCodes);
//   };

//   return (
//     <UserCodesContext.Provider
//       value={{
//         fetchCodes,
//         usersCodes,
//         setUsersCodes,
//         handleDelete,
//         userSearch,
//         setUserSearch,
//         handleFilter,
//       }}
//     >
//       {children}
//     </UserCodesContext.Provider>
//   );
// };


export const UserCodesProvider = ({ children }: { children: JSX.Element }) => {
  const { user }: any = useAuthProvider();
  const [usersCodes, setUsersCodes] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  const fetchCodes = () => {
    getUsersCodes(user.id).then((codes) => setUsersCodes(codes));
  };

  const handleDelete = (id: string) => {
    deleteCheat(id).then(() => fetchCodes());
  };

  const filterCodes = (codes: CheatCode[], searchTerm: string) => {
    return codes.filter((code: CheatCode) =>
      code.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCodes = filterCodes(usersCodes, userSearch);

  return (
    <UserCodesContext.Provider
      value={{
        fetchCodes,
        usersCodes: filteredCodes,
        handleDelete,
        userSearch,
        setUserSearch,
      }}
    >
      {children}
    </UserCodesContext.Provider>
  );
};




export const useUserCodesProvider = () => useContext(UserCodesContext);
