import { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextType } from "../types/context/auth-context";

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children } : { children : ReactNode }){
    const [user, setUser] = useState<null | Object>(null)

    const userHandle = (user: Object)=>{
        setUser(user)
    }

    const payload: AuthContextType = {
        user,
        isAuth : user ? true : false,
        setUser : userHandle
    }
    
    return (
        <AuthContext.Provider value={payload}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}