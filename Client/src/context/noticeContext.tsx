/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  createContext, useContext, useState} from "react";
import { iNotice } from "../interfaces/notice";

interface iNoticeContext{
  notice: iNotice| undefined;
  setNotice: React.Dispatch<React.SetStateAction<iNotice | undefined>>;
}

export const NoticeContext = createContext<iNoticeContext |undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useNoticeContext= () =>{
  return useContext(NoticeContext)
}

export const NoticeContextProvider = ({ children}) =>{
  const [notice,setNotice] = useState<iNotice | undefined>(undefined);

  return <NoticeContext.Provider value={{notice: notice,setNotice}}>
    {children}
  </NoticeContext.Provider>
}
