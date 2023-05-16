import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import styles from './UserData.module.css';
import { useAppProvider } from '../../../Providers/App.Provider.context';
import { UserNewCodeForm } from '../../NewCodeForm/UserNewCodeForm';
import { useUserCodesProvider } from '../../../Providers/UserCodes.Provider';
import { CodeFilter } from '../../CodeFilter/CodeFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CheatCode } from '../../../Types';
import classNames from 'classnames';

export const UserData: React.FC = () => {
  const { showNewGame } = useAppProvider();
  const { fetchCodes, usersCodes, handleDelete, setUsersCodes } =
    useUserCodesProvider();

  useEffect(() => {
    fetchCodes();
  }, []);

  const setConsoleTitle = (consoleId: string) => {
    console.log(consoleId);
    switch (consoleId) {
      case '0':
        return 'Xbox One';
      case '1':
        return 'PS4';
      case '2':
        return 'PC';
      case '3':
        return 'Nintendo Switch';
      default:
        return 'Unknown Console';
    }
    
  };

  const [dragIndex, setDragIndex ] : any = useState(null);
  const [hoverIndex, setHoverIndex] : any = useState(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    setHoverIndex(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, index: number) => {
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
                  className={classNames(
                    styles.code_container,
                    styles['hvr-shutter-out-vertical'],
                    styles['hvr-hang']
                  )}
                  key={gameIndex}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, gameIndex)}
                  onDragOver={(e) => handleDragOver(e, gameIndex)}
                  onDrop={(e) => handleDrop(e, gameIndex)}
                  // style={{
                  //   opacity: dragIndex === gameIndex ? 0.5 : 1,
                  //   backgroundColor:
                  //     hoverIndex === gameIndex ? 'lightgray' : 'black',
                  // }}
                >
                  <div className={styles.name_console}>
                    <div className={styles.game_name}>{code.gameTitle}</div>
                    <div className={styles.game_console}>
                      {setConsoleTitle(code.consoleId)}
                    </div>
                  </div>
                  <div className={styles.game_codeTitle}>{code.codeTitle}:</div>
                  <div className={styles.game_code}>{code.code}</div>
                  <button
                    data-id={code.id}
                    onClick={(event) => handleDelete(event)}
                    type="button"
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      style={{ color: '#d30909' }}
                    />
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
