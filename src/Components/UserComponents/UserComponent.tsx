import React, { useState } from 'react';
import styles from './UserComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../Navbar/Navbar';
import { useAppProvider } from '../../Providers/App.Provider.context';
import { useAuthProvider } from '../../Providers/Auth.Provider.context';

export const UserComponent: React.FC = () => {
  const { setDisplay, showNav, setShowNav }: any = useAppProvider();
  const { user }: any = useAuthProvider();

  const navDisplay = () => {
    if (showNav === true) {
      setShowNav(false);
    } else setShowNav(true);
    // setDisplay('');
  };

  return (
    <div className={styles.user_components_container}>
      <div className={styles.user_icon}>
        <div className="user_name">{user ? user.username : 'Account'}</div>
        <FontAwesomeIcon
          className={styles.userIcon}
          style={{ cursor: 'pointer' }}
          onClick={() => navDisplay()}
          icon={faCircleUser}
        />
      </div>
    {showNav && <Navbar />}  
    {/* <Navbar /> */}
    </div>
  );
};
