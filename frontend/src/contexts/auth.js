import { stubFalse } from "lodash";
import { createContext, useEffect, useState } from "react";
import Signin from "../pages/Signin";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const signin = () => {
    const userToken = sessionStorage.getItem("accessToken");
  
    if (userToken) {
      return true;
    }
    return false;
  };

  const signout = () => {
    sessionStorage.removeItem("accessToken");
  };

  const isAuthenticated = () => {
    return signin()
  }


  return (
    <AuthContext.Provider
      value={{signin, isAuthenticated}}
    >
      {children}
    </AuthContext.Provider>
  );
};
