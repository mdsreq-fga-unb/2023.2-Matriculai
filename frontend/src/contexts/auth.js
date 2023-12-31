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
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("superuser");
  };

  const isAuthenticated = () => {
    return signin()
  }

  const isSuperUser = () => {
    const userType = sessionStorage.getItem("superuser");
    return userType
  }

  const userId = () => {
    const user = sessionStorage.getItem("user_id");
    return user
  }

  const userSy = () => {
    const user_sy = sessionStorage.getItem("sy");
    return user_sy
  }

  return (
    <AuthContext.Provider
      value={{signin, isAuthenticated, isSuperUser, userId, userSy}}
    >
      {children}
    </AuthContext.Provider>
  );
}
