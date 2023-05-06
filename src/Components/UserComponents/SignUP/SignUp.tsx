import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppProvider } from '../../../Providers/App.Provider.context';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const { setShowNav }: any = useAppProvider();


  const { register } : any = useAuthProvider();

  const userObject = {
    username: username,
    password: userPassword,
    games: []
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUsername('');
          setUserPassword('');
          setShowNav(false)
          register(userObject).then(() => {
           toast.success('Registration successful!');
          })
          .catch((error: any) => {
            toast.error(error.message);
          });
        }}
        className={styles.user_form}
        action=""
      >

        <div className={styles.user_form_container}>
          <div className={styles.user_form_inputs}>
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
            <button type="submit">Register</button>
          </div>
        </div>

      </form>
    </>
  );
};