import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { Children } from "../types/components/global";
import { apiCall } from "../utils/api/api";
import { GET } from "../constants/api/api-constants";
import endpoints from "../utils/api/endpoints";
import { AuthResponseType } from "../types/api/auth";

export default function AuthMiddleware({ children }: Children){
    const auth = useAuth()
    const [verified, setVerified] = useState<boolean>(false)

    useEffect(()=>{
        const getUser = async ()=> {
            const result: AuthResponseType = await apiCall(GET, endpoints().authUser, undefined, true)
            if(result.access && result.user){
                auth?.setUser(result.user)
            }
            setVerified(true)
        }
        getUser()
    },[])

    if(!verified){
        return
    }

    return (
        <>
            {children}
        </>
    )
}