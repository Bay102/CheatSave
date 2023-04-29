import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthProvider } from '../../Providers/Auth.Provider.context';
import { LogoutButton } from '../LogoutButton';
import { Login } from '../UserComponents/Login/Login';
import { SignUp } from '../UserComponents/SignUP/SignUp';
import styles from './Navbar.module.css';
import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAppProvider } from '../../Providers/App.Provider.context';

export const Navbar = () => {

  const { user }: any = useAuthProvider();
  const { display, setDisplay , showNav}: any = useAppProvider();


  const navbarOptions: any = {
    login: <Login />,
    signUp: <SignUp />,
  };

  return (
    <>
      <div
        className={styles.nav_container}
      >
        <ul className={`${styles.nav_list} ${
          showNav ? styles.nav_container_hidden : ''
        }`}>
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

      <div className="register_container">{navbarOptions[display]}</div>
    </>
  );
};
