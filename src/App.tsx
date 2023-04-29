import React, { useState } from 'react';
import './App.css';
import { CheatCC } from './Components/CheatCC_IFrame/CheatCC';
import { UserComponent } from './Components/UserComponents/UserComponent';
import { AuthProvider } from './Providers/Auth.Provider.context';
import { ToastContainer, toast } from 'react-toastify';
import { AppProvider } from './Providers/App.Provider.context';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
      <>
        <div className="App"> 
          <ToastContainer />
          {/* <CheatCC /> */}
          <UserComponent />
        </div>
      </>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
