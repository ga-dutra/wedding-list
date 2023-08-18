import { createContext, useState } from "react";

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [pageSelected, setPageSelected] = useState("Página Inicial")
  return (
    <UserContext.Provider
      value={{ pageSelected, setPageSelected
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
