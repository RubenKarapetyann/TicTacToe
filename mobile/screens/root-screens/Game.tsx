import { useEffect, useRef } from "react";
import { Text } from "react-native";
import io, { Socket } from "socket.io-client"
import { SERVER } from "../../constants/api/api-constants";
import { getJwtAccessToken } from "../../utils/storage/jwt";

export default function Game(){
    const socket = useRef<Socket | null>(null)

    useEffect(()=>{
        const engine = async ()=>{
            const token = await getJwtAccessToken()
            socket.current = io(SERVER, {
                auth : {
                    token
                }
            })
        }

        engine()
        return ()=> {
            if(socket.current){
                socket.current.disconnect()
            }
        }
    },[])

    return (
        <Text>
            Game
        </Text>
    )
}