import React from 'react';
import styles from './UserComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../Navbar/Navbar';
import { useAppProvider } from '../../Providers/AppProvider';
import { useAuthProvider } from '../../Providers/AuthProvider';
import { UserData } from './UserData/UserData';

export const UserComponent: React.FC = () => {
  const { showNav, setShowNav } = useAppProvider();
  const { user } = useAuthProvider();

  const setNavDisplay = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <div className={styles.user_components_container}>
      <div className={styles.user_icon}>
        <div onClick={() => setNavDisplay()} className="user_name">
          {user ? user.userInformation.username : 'SignIn'}
        </div>
        <FontAwesomeIcon
          className={styles.userIcon}
          onClick={() => setNavDisplay()}
          style={{ cursor: 'pointer' }}
          icon={faCircleUser}
        />
      </div>
      {showNav && <Navbar />}
      <div className="user_data_container">{user && <UserData />}</div>
    </div>
  );
};
