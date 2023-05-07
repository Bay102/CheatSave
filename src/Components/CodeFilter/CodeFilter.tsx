import React from 'react';
import styles from './CodeFilter.module.css';
import { NewGameFormProps } from '../../Types';
import { useAppProvider } from '../../Providers/App.Provider.context';

export const CodeFilter: React.FC = () => {
  const { showNewGame, setShowNewGame }: any = useAppProvider();

  return (
    <div className={styles.code_filter_container}>
      <input type="search" placeholder="Search Games..." />
      
      <button
        onClick={() => (showNewGame ? setShowNewGame(false) : setShowNewGame(true))}
      >
        + New Code
      </button>
    </div>
  );
};
