import React, { useCallback, useEffect, useState } from 'react';
import styles from './CodeFilter.module.css';
import { CheatCode, NewGameFormProps } from '../../Types';
import { useAppProvider } from '../../Providers/App.Provider.context';
import { useUserCodesProvider } from '../../Providers/UserCodes.Provider';

export const CodeFilter: React.FC = () => {
  const { userSearch, setUserSearch, consoleFilter, setConsoleFilter }: any =
    useUserCodesProvider();

  const { showNewGame, setShowNewGame, consoles }: any = useAppProvider();

  return (
    <div className={styles.code_filter_container}>
      <input
        type="search"
        value={userSearch}
        onChange={(e) => {
          setUserSearch(e.target.value);
        }}
        placeholder="Search By Game..."
      />
      <select
       name="console" 
       id="" 
       value={consoleFilter}
       onChange={(e) => setConsoleFilter(e.target.value)}
       >
        <option>Select..</option>
        {consoles.map((console: any, index: number) => (
          <option value={index + 1} key={index}>
            {console.console}
          </option>
        ))}
      </select>

      <button
        onClick={() => (showNewGame ? setShowNewGame(false) : setShowNewGame(true))}
      >
        + New Code
      </button>
    </div>
  );
};
