import { getItem, setItem } from "./storage";


export const getJwtAccessToken = async ()=>{
    return (await getItem("jwt")).access
}

export const setJwtToken = async (token: string)=>{
    await setItem("jwt", {
        access : token,
        refresh : ""
    })
}