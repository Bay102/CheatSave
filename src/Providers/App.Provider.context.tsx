import React, { createContext, useContext, useEffect, useState } from 'react';
import { getConsoles } from '../Api/get-consoles';

const AppContext = createContext({});

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [display, setDisplay] = useState<string>('');
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showNewGame, setShowNewGame] = useState(false);
  const [consoles, setConsoles] = useState<string[]>([]);

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
        consoles
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => useContext(AppContext);
