import React from 'react';
import styles from './CodeFilter.module.css';
import { useAppProvider } from '../../Providers/AppProvider';
import { useUserCodesProvider } from '../../Providers/UserCodesProvider';
import { ConsoleType } from '../../Types';

export const CodeFilter: React.FC = () => {
  const { userSearch, setUserSearch, consoleFilter, setConsoleFilter } =
    useUserCodesProvider();

  const { showNewGame, setShowNewGame, consoles } = useAppProvider();

  return (
    <div className={styles.code_filter_container}>
      <label htmlFor="">
        Search By Game:
        <input
          type="search"
          value={userSearch}
          onChange={(e) => {
            setUserSearch(e.target.value);
          }}
          placeholder="Search By Game..."
        />
      </label>

      <label htmlFor="">
        By Console:
        <select
          name="console"
          id=""
          value={consoleFilter}
          onChange={(e) => setConsoleFilter(e.target.value)}
        >
          <option value={''}>Select..</option>
          {consoles.map((consoleItem: ConsoleType, index) => (
            <option value={index} key={index}>
              {consoleItem.console}
            </option>
          ))}
        </select>
      </label>

      <button
        onClick={() =>
          showNewGame ? setShowNewGame(false) : setShowNewGame(true)
        }
      >
        + New Code
      </button>
    </div>
  );
};
