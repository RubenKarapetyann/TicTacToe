import socket, { Socket } from "socket.io"
import { Server } from "http"
import { CONNECTION, DISCONNECT } from "../../constants/socket"
import { authentication } from "./authentication"
import { createNewGame } from "../../utils/database"
import Player from "../../classes/Player"

export default {
    getIo : (server: Server)=>{
        const search: (Player & { socketId : string | number })[] = []

        const io = new socket.Server(server, {
            cors : {
                origin: "*",
                methods: ["GET", "POST"]
            }
        })

        io.use(authentication)

        io.on(CONNECTION,(socket: Socket)=>{            
            const firstPlayer: Player = socket.handshake.auth.user
            console.log(firstPlayer.name + " connected");

            if(firstPlayer.game_id){
                return socket.emit("test", {message : "in game"})
            }

            if(search.length){
                const secondPlayer: (Player & { socketId : string | number }) | undefined = search.pop()
                if(!secondPlayer){
                    search.push({
                        ...firstPlayer,
                        socketId : socket.id
                    })
                    return
                }

                const createGame = async ()=>{
                    io.in(secondPlayer.socketId.toString()).emit("test", {access : true})
                    socket.emit("test", {access : true})     
                    console.log(firstPlayer, secondPlayer);
                    await createNewGame(secondPlayer.id, firstPlayer.id)
                }
                createGame()
            }else{
                search.push({
                    ...firstPlayer,
                    socketId : socket.id
                })
            } 

            socket.on(DISCONNECT, ()=>{
                console.log("user disconnected")
            })
        })
    }
}
