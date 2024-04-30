import { createContext, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem("Token", serverToken);
  };

  return (
    <AuthContext.Provider value={{ storeTokenInLs }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
}