import React from 'react';
import { useAuthProvider } from '../../../Providers/Auth.Provider.context';

export const SignUpButton = () => {
   
  const { register }: any = useAuthProvider();

  return <button onClick={() => register()}>Create Account</button>;
};
