import { SERVER } from "../../constants/api/api-constants";
import { Method } from "../../types/api/api";

export async function apiCall( method: Method, route: string, body? : Object ){
    try{
        const response = await fetch(`${SERVER}/${route}`,{
            method,
            body : JSON.stringify(body),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        return await response.json()
    }catch(err){
        console.log(err);
    }
}