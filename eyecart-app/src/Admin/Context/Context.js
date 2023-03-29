
import { createContext, useState } from "react";

export const AuthContext=createContext()



const ContextProvider=({children})=>{
    let [active,setActive]=useState(0)
  return <AuthContext.Provider value={{active,setActive}}>
    {
        children
    }
  </AuthContext.Provider>
}
export default ContextProvider