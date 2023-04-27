import React, { useState } from 'react';
import './App.css';
import { CheatCC } from './Components/CheatCC_IFrame.tsx/CheatCC';
import { UserComponent } from './Components/UserComponents/UserComponent';
import { AuthProvider } from './Providers/Auth.Provider.context';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <>
        <div className="App"> 
          <ToastContainer />
          {/* <CheatCC /> */}
          <UserComponent />
        </div>
    
      </>
    </AuthProvider>
  );
}

export default App;
