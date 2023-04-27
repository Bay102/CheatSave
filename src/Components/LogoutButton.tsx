import React from "react"
import { useAuthProvider } from "../Providers/Auth.Provider.context"

export const LogoutButton = () => {

   const {logOut} : any = useAuthProvider() 
  
   return (
      <button onClick={() => logOut()}>LogOut</button>
   )
}  