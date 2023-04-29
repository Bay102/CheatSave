import React from "react"
import { useAuthProvider } from "../../../Providers/Auth.Provider.context"


export const LogInButton = () => {

const { logIn } : any = useAuthProvider()
  
   return (
      <button type="submit" onClick={() => logIn()}>Sign In</button>
   )
}  