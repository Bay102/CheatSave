import React from 'react';
import { useAuthProvider } from '../Providers/AuthProvider';

export const LogoutButton = () => {
  const { logOut } = useAuthProvider();

  return <button onClick={() => logOut()}>LogOut</button>;
};
