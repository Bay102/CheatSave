import React from 'react';
import './App.css';
import { UserComponent } from './Components/UserComponents/UserComponent';
import { AuthProvider } from './Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './Providers/AppProvider';
import { UserCodesProvider } from './Providers/UserCodesProvider';
import { CheatCC } from './Components/CheatCC_IFrame/CheatCC';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <UserCodesProvider>
          <div className="App">
            <ToastContainer position="top-center" autoClose={1000} />
            <CheatCC />
            <UserComponent />
          </div>
        </UserCodesProvider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
