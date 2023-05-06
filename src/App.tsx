import React, { useState } from 'react';
import './App.css';
import { CheatCC } from './Components/CheatCC_IFrame/CheatCC';
import { UserComponent } from './Components/UserComponents/UserComponent';
import { AuthProvider } from './Providers/Auth.Provider.context';
import { ToastContainer, toast } from 'react-toastify';
import { AppProvider } from './Providers/App.Provider.context';
import { UserCodesProvider } from './Providers/UserCodes.Provider';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <UserCodesProvider>
          <>
            <div className="App">
              <ToastContainer />
              {/* <CheatCC /> */}
              <UserComponent />
            </div>
          </>
        </UserCodesProvider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;