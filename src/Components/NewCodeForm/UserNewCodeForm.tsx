import React, { useState } from 'react';
import styles from './UserNewCodeForm.module.css';
import { addGame } from '../../Api/add-code';
import { useAuthProvider } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { useUserCodesProvider } from '../../Providers/UserCodesProvider';
import { useAppProvider } from '../../Providers/AppProvider';
import { ConsoleType } from '../../Types';

export const UserNewCodeForm: React.FC = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [console, setConsole] = useState<string>('');
  const [codeTitle, setCodeTitle] = useState('');
  const [code, setCode] = useState('');

  const { setShowNewGame, consoles } = useAppProvider();
  const { user } = useAuthProvider();
  const { fetchCodes } = useUserCodesProvider();

  const handleCodeSubmit = () => {
    if (user)
      if (gameTitle && codeTitle && console && code) {
        addGame(gameTitle, console, codeTitle, code, user.id).then(() =>
          fetchCodes()
        );
        setGameTitle('');
        setConsole('');
        setCodeTitle('');
        setCode('');
        setShowNewGame(false);
      } else toast('All fields are required');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCodeSubmit();
      }}
    >
      <div className={styles.add_game_container}>
        <label htmlFor="title">
          Game Title:
          <input
            onChange={(e) => setGameTitle(e.target.value)}
            value={gameTitle}
            type="text"
          />
        </label>
        <label htmlFor="console">
          Console:
          <select
            onChange={(e) => setConsole(e.target.value)}
            value={console}
            name=""
            id=""
          >
            <option>Select...</option>
            {consoles.map((console: ConsoleType, index) => (
              <option value={index} key={index}>
                {console.console}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="title">
          Title:
          <input onChange={(e) => setCodeTitle(e.target.value)} type="text" />
        </label>
        <label htmlFor="code">
          Code:
          <input onChange={(e) => setCode(e.target.value)} type="text" />
        </label>
        <div className={styles.form_buttons}>
          <button
            onClick={() => setShowNewGame(false)}
            type="button"
            className={styles.close}
          >
            Close
          </button>
          <button type="submit">Add Code</button>
        </div>
      </div>
    </form>
  );
};
