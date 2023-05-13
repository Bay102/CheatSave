import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import styles from './UserData.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { useAppProvider } from '../../../Providers/App.Provider.context';
import { UserNewCodeForm } from '../../NewCodeForm/UserNewCodeForm';
import { getUsersCodes } from '../../../Api/User/get-users-codes';
import { useUserCodesProvider } from '../../../Providers/UserCodes.Provider';
import { deleteCheat } from '../../../Api/User/delete-cheat';
import { CodeFilter } from '../../CodeFilter/CodeFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CheatCode } from '../../../Types';
import classNames from 'classnames';

export const UserData: React.FC = () => {
  const { showNewGame }: any = useAppProvider();
  const { fetchCodes, usersCodes, handleDelete, setUsersCodes }: any = useUserCodesProvider();

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

  const [dragIndex, setDragIndex] : any = useState(null);
  const [hoverIndex, setHoverIndex] : any = useState(null);

  const handleDragStart = (e, index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setHoverIndex(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const newItems = [...usersCodes];
    const draggedItem = newItems[dragIndex];
    newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setUsersCodes(newItems);
    setDragIndex(null);
    setHoverIndex(null);
  };



  return (
    <>
      <div className={styles.my_cheats_container}>
        <div className={styles.nav}>
          <h2>My Cheat Codes</h2>
        </div>
        <div className={styles.games_container}>
          {showNewGame && <UserNewCodeForm />}
          {<CodeFilter />}
          <ul>
          {usersCodes &&
            usersCodes.map((code: CheatCode, gameIndex: number) => (
              <li
                className={classNames(styles.code_container, styles['hvr-shutter-out-vertical'],styles['hvr-hang'])}
                key={gameIndex}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, gameIndex)}
                onDragOver={(e) => handleDragOver(e, gameIndex)}
                onDrop={(e) => handleDrop(e, gameIndex)}
                style={{
                  opacity: dragIndex === gameIndex ? 0.5 : 1,
                  backgroundColor: hoverIndex === gameIndex ? 'lightgray' : 'white'
                }}
              >
                <div className={styles.name_console}>
                  <div className={styles.game_name}>{code.gameTitle}</div>
                  <div className={styles.game_console}>{setConsoleTitle(code.consoleId)}</div>
                </div>
                <div className={styles.game_codeTitle}>{code.codeTitle}:</div>
                <div className={styles.game_code}>{code.code}</div>
                <button data-id={code.id} onClick={(event) => handleDelete(event)} type="button">
                  <FontAwesomeIcon icon={faTrashCan} style={{ color: '#d30909' }} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
