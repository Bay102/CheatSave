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
