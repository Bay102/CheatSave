import React, { useState } from 'react';
import styles from './UserNewCodeForm.module.css';
import { addGame } from '../../Api/add-game';
import { useAuthProvider } from '../../Providers/Auth.Provider.context';
import { toast } from 'react-toastify';
import { useUserCodesProvider } from '../../Providers/UserCodes.Provider';
import { useAppProvider } from '../../Providers/App.Provider.context';

export const UserNewCodeForm: React.FC = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [console, setConsole] = useState(undefined);
  const [codeTitle, setCodeTitle] = useState('');
  const [code, setCode] = useState('');

  const { setShowNewGame, consoles }: any = useAppProvider();
  const { user }: any = useAuthProvider();
  const { fetchCodes, consoleOptions }: any = useUserCodesProvider();

  const handleCodeSubmit = () => {
    if (gameTitle && codeTitle && console && code) {
      addGame(gameTitle, console, codeTitle, code, user.id).then(() => fetchCodes());
      setGameTitle('');
      setConsole(undefined);
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
            onChange={(e: any) => setConsole(e.target.value)}
            value={console}
            name=""
            id=""
          >
            <option>Select...</option>
            {consoles.map((console: any, index: number) => (
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
