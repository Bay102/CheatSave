import React, { useEffect, useState } from 'react';
import styles from './UserData.module.css';
import { useAppProvider } from '../../../Providers/AppProvider';
import { UserNewCodeForm } from '../../NewCodeForm/UserNewCodeForm';
import { useUserCodesProvider } from '../../../Providers/UserCodesProvider';
import { CodeFilter } from '../../CodeFilter/CodeFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CheatCode } from '../../../Types';
import classNames from 'classnames';
import { NewFeature } from '../../NewFeature/NewFeature';

export const UserData: React.FC = () => {
  const [showNewFeature, setShowNewFeature] = useState(true);
  const { showNewGame } = useAppProvider();
  const { fetchCodes, usersCodes, handleDelete, setUsersCodes } =
    useUserCodesProvider();

  useEffect(() => {
    fetchCodes();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewFeature(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

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
    if (dragIndex === null) {
      return;
    }
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
          {showNewFeature && <NewFeature />}
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
                >
                  <div className={styles.name_console}>
                    <div className={styles.game_name}>{code.gameTitle}</div>
                    <div className={styles.game_console}>
                      {code.consoleName}
                    </div>
                  </div>
                  <div className={styles.game_codeTitle}>{code.codeTitle}:</div>
                  <div className={styles.game_code}>
                    {code.code.toUpperCase()}
                  </div>
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
