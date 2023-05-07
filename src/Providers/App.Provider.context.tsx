import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [display, setDisplay] = useState<string>('');
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showNewGame, setShowNewGame] = useState(false);
  const [usersCodes, setUsersCodes] = useState([]);

  return (
    <AppContext.Provider
      value={{
        display,
        setDisplay,
        showNav,
        setShowNav,
        showNewGame,
        setShowNewGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => useContext(AppContext);
