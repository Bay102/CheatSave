import React, { useState } from 'react';
import styles from './UserData.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { useAppProvider } from '../../../Providers/App.Provider.context';
import { UserNewCodeForm } from '../../NewCodeForm/UserNewCodeForm';


export const UserData: React.FC = () => {
  const { user }: any = useAuthProvider();
  const [showNewGame, setShowNewGame] = useState(false);
  const [showNewCodeForm, setShowNewCodeForm] = useState(false);

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
          {/* {user.games &&
            user.games.map((game: any, gameIndex: number) => (
              <div key={gameIndex}>
                <div className={styles.game_name}>
                  {game.name}
                  <div
                    onClick={() =>
                      showNewCodeForm
                        ? setShowNewCodeForm(false)
                        : setShowNewCodeForm(true)
                    }
                  >
                    + new code
                  </div>
                </div>
                {game.codes.map((code: any, codeIndex: number) => (
                  <div key={`${gameIndex}-${codeIndex}`}>
                    {code.title}:{code.code}
                  </div>
                ))}
              </div>
            ))} */}
        </div>
      </div>
      {/* <div className={styles.notes_container}>
        <div className={styles.nav}>
          <h2>My Notes</h2>
          <input type="search" placeholder="Search..." />
        </div>
      </div> */}
    </>
  );
};



