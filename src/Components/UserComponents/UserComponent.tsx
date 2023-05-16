import React from 'react';
import styles from './UserComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../Navbar/Navbar';
import { useAppProvider } from '../../Providers/App.Provider.context';
import { useAuthProvider } from '../../Providers/Auth.Provider.context';
import { UserData } from './UserData/UserData';

export const UserComponent: React.FC = () => {
  const { showNav, setShowNav } = useAppProvider();
  const { user } = useAuthProvider();

  return (
    <div className={styles.user_components_container}>
      <div className={styles.user_icon}>
        <div className="user_name">{user ? user.username : 'SignIn'}</div>
        <FontAwesomeIcon
          className={styles.userIcon}
          style={{ cursor: 'pointer' }}
          onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
          icon={faCircleUser}
        />
      </div>
      {showNav && <Navbar />}
      <div className="user_data_container">{user && <UserData />}</div>
    </div>
  );
};
