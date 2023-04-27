import React, { useState } from 'react';
import styles from './UserComponent.module.css';
import { SignUp } from './SignUP/SignUp';
import { Login } from './Login/Login';
import { LogoutButton } from '../LogoutButton';

export const UserComponent: React.FC = () => {
  const [display, setDisplay] = useState<string>('login')

  const navbarOptions: any = {
    login: (<Login />),
    signUp: (<SignUp />),
  };

  return (
    <div className={styles.user_components_container}>
      <div className={styles.nav_container}>
        <ul className={styles.nav_list}>
          <li>
            <button onClick={() => setDisplay('login')}>Login</button>
          </li>
          <li>
            <button onClick={() => setDisplay('signUp')}>SignUp</button>
          </li>
          <li>
          <LogoutButton />
          </li>
        </ul>
      </div>

      <div className="register_container">
        {navbarOptions[display]}
      </div>
    </div>
  );
};
