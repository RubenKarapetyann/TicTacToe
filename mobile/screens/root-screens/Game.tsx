import { useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import io, { Socket } from "socket.io-client"
import { SERVER } from "../../constants/api/api-constants";
import { getJwtAccessToken } from "../../utils/storage/jwt";
import Board from "../../components/game/Board";
import { GAME_FOUND, GAME_SEARCHING, GET_MATRIX } from "../../../global-constants"

export default function Game(){
    const socket = useRef<Socket | null>(null)
    const [matrix, setMatrix] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        const engine = async ()=>{
            const token = await getJwtAccessToken()
            socket.current = io(SERVER, {
                auth : {
                    token
                }
            })

            socket.current.on(GET_MATRIX, (data)=>setMatrix(data.matrix))
            socket.current.on(GAME_SEARCHING, ()=>setIsLoading(true))
            socket.current.on(GAME_FOUND,(data)=>{
                setIsLoading(false)
                setMatrix(data.matrix)
            })
        }

        engine()
        return ()=> {
            if(socket.current){
                socket.current.disconnect()
            }
        }
    },[])

    const moveHandle = (row: number, column: number)=>{
        console.log(row, column);
    }

    if(isLoading){
        return <Text>Loading...</Text>
    }

    return (
        <Text>
            <Board matrix={matrix} moveHandle={moveHandle}/>
        </Text>
    )
}