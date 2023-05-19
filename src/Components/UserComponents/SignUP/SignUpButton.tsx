import React from 'react';
import { useAuthProvider } from '../../../Providers/AuthProvider';

export const SignUpButton = () => {
  const { register } = useAuthProvider();

  return <button onClick={() => register}>Create Account</button>;
};
