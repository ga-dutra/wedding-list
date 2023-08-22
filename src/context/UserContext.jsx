import { createContext, useState } from "react";

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [pageSelected, setPageSelected] = useState("Página Inicial");
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider
      value={{ pageSelected, setPageSelected, cart, setCart
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
