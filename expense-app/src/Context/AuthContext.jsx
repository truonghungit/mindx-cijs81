import { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  return {
    loggedInUser,
    setLoggedInUser,
  };
}
