import React, { useContext } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import { UserContext } from "./ContextAPI/UserContext";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserProvider } from "./ContextAPI/UserContext";

function App() {
  //const user = true;
  //const { user } = useContext(UserContext);
  const { test } = useContext(UserContext);

  return (
    <div className='App'>
      <UserProvider>
        <Routes>
          {test && (
            <>
              <Route path='/dashboard/*' element={<Dashboard />} />
            </>
          )}
          {!test && (
            <>
              <Route path='/dashboard/*' element={<Navigate to='/login' />} />
            </>
          )}
          <Route path='/' element={<Navigate to='/dashboard/' />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
