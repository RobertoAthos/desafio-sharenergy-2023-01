import React,{createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser, IUsersInfo } from "./types";
import { getUserLocalStorage, Login, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider)=>{
        const[user,setUser] = useState<IUser | null>()

        useEffect(()=>{
            const user = getUserLocalStorage()

            if(user){
                setUser(user)
            }
        },[])

        async function authenticate(username:string,password:string){
            const res = await Login(username,password)

            const payload = {token:res.token, username}

            setUser(payload)
            setUserLocalStorage(payload)
        }

        function logout(){
            setUser(null)
            setUserLocalStorage(null)
        }

        return (
           <AuthContext.Provider value={{...user,authenticate, logout}}>
                {children}
           </AuthContext.Provider>
        )
}