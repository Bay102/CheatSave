import React, { useState } from 'react';
import './App.css';
import { UserComponent } from './Components/UserComponents/UserComponent';
import { AuthProvider } from './Providers/Auth.Provider.context';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './Providers/App.Provider.context';
import { UserCodesProvider } from './Providers/UserCodes.Provider';
import { CheatCC } from './Components/CheatCC_IFrame/CheatCC';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <UserCodesProvider>
          <div className="App">
            <ToastContainer position="top-center" autoClose={1000} />
            {/* <CheatCC /> */}
            <UserComponent />
          </div>
        </UserCodesProvider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
