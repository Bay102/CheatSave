import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { useAuthProvider } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppProvider } from '../../../Providers/AppProvider';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [confirmPassword, setConfirmUserPassword] = useState<string>('');

  const { user, logOut } = useAuthProvider();
  const { setShowNav, setDisplay } = useAppProvider();
  const { register } = useAuthProvider();

  const userCredentials = {
    username: username,
    password: userPassword,
  };

  const matchPasswords = () => {
    if (userPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    } else return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      logOut();
    }
    if (username && userPassword && matchPasswords()) {
      register(userCredentials);
      setUsername('');
      setUserPassword('');
      setShowNav(false);
      setDisplay('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.user_form} action="">
        <div className={styles.user_form_container}>
          <div className={styles.user_form_inputs}>
            <h2>Create Account</h2>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              type="text"
              minLength={6}
              pattern="^\S+$"
              title="Spaces are not allowed."
              required
            />
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              placeholder="Password"
              type="password"
              minLength={6}
              pattern="^\S+$"
              title="Spaces are not allowed."
              required
            />
            <input
              onChange={(e) => setConfirmUserPassword(e.target.value)}
              value={confirmPassword}
              placeholder="Confirm Password"
              type="password"
              minLength={6}
              pattern="^\S+$"
              title="Spaces are not allowed."
              required
            />
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </>
  );
};
