import { SERVER } from "../../constants/api/api-constants";
import { Method } from "../../types/api/api";
import { getJwtAccessToken } from "../storage/jwt";

export async function apiCall( method: Method, route: string, body? : Object, needToken?: boolean ){
    try{
        const token = await getJwtAccessToken()  
        if(needToken && !token){
            return null
        }      
        const response = await fetch(`${SERVER}/${route}`,{
            method,
            body : JSON.stringify(body),
            headers : {
                "Content-Type" : "application/json",
                "authorization" : `Bearer ${needToken && token}`
            }
        })
        return await response.json()
    }catch(err){
        console.log(err);
    }
}