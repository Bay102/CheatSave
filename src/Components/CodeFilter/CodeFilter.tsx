import React, { useCallback, useEffect, useState } from 'react';
import styles from './CodeFilter.module.css';
import { CheatCode, NewGameFormProps } from '../../Types';
import { useAppProvider } from '../../Providers/App.Provider.context';
import { useUserCodesProvider } from '../../Providers/UserCodes.Provider';

export const CodeFilter: React.FC = () => {
  const { userSearch, setUserSearch, consoleOptions }: any = useUserCodesProvider();

  const { showNewGame, setShowNewGame }: any = useAppProvider();

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
      <select name="console" id="" placeholder='Sear'>
        <option value="">Select..</option>
        {consoleOptions.map((console: string, index: number) => (
          <option value={''} key={index}>{console}</option>
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
