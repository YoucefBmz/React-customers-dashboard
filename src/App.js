import React, { useContext } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import { UserContext } from "./ContextAPI/UserContext";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./ContextAPI/UserContext";

function App() {
  //const user = true;
  //const { user } = useContext(UserContext);
  const { user } = useContext(UserContext);
  return (
    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            {user && (
              <>
                <Route path='/dashboard/*' element={<Dashboard />} />
                <Route
                  path='/login'
                  element={<Navigate to='/dashboard/commandes' />}
                />
              </>
            )}
            {!user && (
              <>
                <Route path='/dashboard/*' element={<Navigate to='/login' />} />
                <Route path='/login' element={<Login />} />
              </>
            )}
            <Route path='/' element={<Navigate to='/dashboard/commandes' />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
