import React, { useState } from 'react';
import styles from './Login.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { toast } from 'react-toastify';
import { useAppProvider } from '../../../Providers/App.Provider.context';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const { user, logIn, logOut } = useAuthProvider();
  const { setShowNav } = useAppProvider();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      logOut();
    }
    if (username && userPassword) {
      logIn({ username: username, password: userPassword }).catch((e) => {
        toast.error(e.message);
      });
      setShowNav(false);
    } else toast.error('Silly! You didnt type anything!');
  };

  return (
    <>
      <form onSubmit={handleLogin} action="">
        <div className={styles.login_container}>
          <div className={styles.login_inputs}>
            <h2>Sign In</h2>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              type="text"
            />
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              placeholder="Password"
              type="password"
            />
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </>
  );
};
