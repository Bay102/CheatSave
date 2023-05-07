import React, { useEffect, useState } from 'react';
import styles from './UserData.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { useAppProvider } from '../../../Providers/App.Provider.context';
import { UserNewCodeForm } from '../../NewCodeForm/UserNewCodeForm';
import { getUsersCodes } from '../../../Api/User/get-users-codes';
import { useUserCodesProvider } from '../../../Providers/UserCodes.Provider';
import { deleteCheat } from '../../../Api/User/delete-cheat';

export const UserData: React.FC = () => {
  const { fetchCodes, usersCodes }: any = useUserCodesProvider();
  const [showNewGame, setShowNewGame] = useState(false);

  useEffect(() => {
    fetchCodes();
  }, []);

  const setConsoleTitle = (consoleId: string) => {
    switch (consoleId) {
      case '1':
        return 'Xbox One';
      case '2':
        return 'PS4';
      case '3':
        return 'PC';
      case '4':
        return 'Nintendo Switch';
      default:
        return 'Unknown Console';
    }
  };

  const handleDelete = (event) => {
    const id = event.currentTarget.dataset.id
    deleteCheat(id).then((codes) => fetchCodes(codes));
  };

  return (
    <>
      <div className={styles.my_cheats_container}>
        <div className={styles.nav}>
          <h2>My Cheat Codes</h2>
          <input type="search" placeholder="Search Games..." />
          <button
            onClick={() =>
              showNewGame ? setShowNewGame(false) : setShowNewGame(true)
            }
          >
            + New Code
          </button>
        </div>
        <div className={styles.games_container}>
          {showNewGame && <UserNewCodeForm setShowNewGame={setShowNewGame} />}
          {usersCodes &&
            usersCodes.map((code: any, gameIndex: number) => (
              <div className={styles.code_container} key={gameIndex}>
                <div className={styles.game_name}>{code.gameTitle}:</div>
                <div className={styles.game_console}>
                  {setConsoleTitle(code.consoleId)}:
                </div>
                <div className={styles.game_codeTitle}>{code.codeTitle}:</div>
                <div className={styles.game_code}>{code.code}</div>
                <button
                  data-id={code.id}
                  onClick={(e) => handleDelete(e)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
