import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(true);
  function toggleAuth() {
    setIsAuth(true);
  }
  function logout() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;