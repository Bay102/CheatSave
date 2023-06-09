import React, { useState } from 'react';
import styles from './Login.module.css';
import { useAuthProvider } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';

export const Login: React.FC = () => {
  const { user, logIn, logOut } = useAuthProvider();

  const [username, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      logOut();
    }
    if (username && userPassword) {
      logIn({ username: username, password: userPassword });
    } else toast.error('All fields are required');
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
              // maxLength={6}
            />
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </>
  );
};
