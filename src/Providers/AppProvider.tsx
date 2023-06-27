import React, { createContext, useContext, useEffect, useState } from 'react';
import { getConsoles } from '../Api/get-consoles';
import { AppContextType } from '../Types';

const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [display, setDisplay] = useState('login');
  const [showNav, setShowNav] = useState<boolean>(true);
  const [showNewGame, setShowNewGame] = useState(false);
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    getConsoles().then((consoles) => setConsoles(consoles));
  }, []);

  return (
    <AppContext.Provider
      value={{
        display,
        setDisplay,
        showNav,
        setShowNav,
        showNewGame,
        setShowNewGame,
        consoles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => useContext(AppContext);
