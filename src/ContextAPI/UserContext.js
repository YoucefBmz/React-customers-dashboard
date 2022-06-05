import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [test, setTest] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, test, setTest }}>
      {props.children}
    </UserContext.Provider>
  );
};
