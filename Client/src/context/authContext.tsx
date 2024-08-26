/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  createContext, useContext, useState} from "react";

interface iAuthContext{
  authUser: any;
  setAuthUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<iAuthContext |undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () =>{
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children}) =>{
  const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("app-user"))|| null);

  return <AuthContext.Provider value={{authUser,setAuthUser}}>
    {children}
  </AuthContext.Provider>
}
