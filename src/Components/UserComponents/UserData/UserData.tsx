import React, { useEffect, useState } from 'react';
import styles from './UserData.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { useAppProvider } from '../../../Providers/App.Provider.context';
import { UserNewCodeForm } from '../../NewCodeForm/UserNewCodeForm';
import { getUsersCodes } from '../../../Api/User/get-users-codes';
import { useUserCodesProvider } from '../../../Providers/UserCodes.Provider';

export const UserData: React.FC = () => {

  const { fetchCodes, usersCodes } : any = useUserCodesProvider()
  const [showNewGame, setShowNewGame] = useState(false);

  useEffect(() => {
    fetchCodes()
  }, []);

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
        <div className="games_container">
          {showNewGame && <UserNewCodeForm setShowNewGame={setShowNewGame} />}
          {usersCodes &&
            usersCodes.map((game: any, gameIndex: number) => (
              <div key={gameIndex}>
                <div className={styles.game_name}>{game.gameTitle}</div>
                {/* {game.codes.map((code: any, codeIndex: number) => (
                  <div key={`${gameIndex}-${codeIndex}`}>
                    {code.title}:{code.code}
                  </div>
                ))} */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
