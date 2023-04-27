import React, { useState } from 'react';
import styles from './Login.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { toast } from 'react-toastify';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const { setUser ,logIn } : any = useAuthProvider();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logIn({username: username, password: userPassword}).catch((e : any) => {
            toast.error(e.message)
          })
        }}
        className={''}
        action=""
      >
        <div className={styles.login_container}>
          <div className={styles.login_inputs}>
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
              type="text"
            />
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </>
  );
};
