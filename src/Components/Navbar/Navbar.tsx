import { LogoutButton } from '../LogoutButton';
import { Login } from '../UserComponents/Login/Login';
import { SignUp } from '../UserComponents/SignUP/SignUp';
import styles from './Navbar.module.css';
import React from 'react';
import { useAppProvider } from '../../Providers/AppProvider';
import { NavBarTypes } from '../../Types';

export const Navbar: React.FC = () => {
  const { display, setDisplay } = useAppProvider();

  const navbarOptions: NavBarTypes = {
    login: <Login />,
    signUp: <SignUp />,
  };

  return (
    <>
      <div className={styles.nav_container}>
        <ul className={styles.nav_container}>
          <li>
            <button onClick={() => setDisplay('login')}>Login</button>
          </li>
          <li>
            <button onClick={() => setDisplay('signUp')}>New Account</button>
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
