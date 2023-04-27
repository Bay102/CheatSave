import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const { register } : any = useAuthProvider();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUsername('');
          setUserPassword('');
          register({ username: username, password: userPassword }).then(() => {
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
