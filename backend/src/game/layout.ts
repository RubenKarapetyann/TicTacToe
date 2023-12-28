import socket, { Socket } from "socket.io"
import { Server } from "http"
import { CONNECTION, DISCONNECT } from "../../constants/socket"
import { authentication } from "./authentication"
import { addGame } from "../../utils/database"
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
            if(search.length){
                const secondPlayer: (Player & { socketId : string | number }) | undefined = search.pop()
                if(!secondPlayer){
                    search.push({
                        ...socket.handshake.auth.user,
                        socketId : socket.id
                    })
                    return
                }

                const createGame = async ()=>{
                    io.in(secondPlayer.socketId.toString()).emit("test", {access : true})
                    socket.emit("test", {access : true})
                    await addGame(secondPlayer.id, socket.handshake.auth.user.id)
                }
                createGame()
            }else{
                search.push({
                    ...socket.handshake.auth.user,
                    socketId : socket.id
                })
            } 

            socket.on(DISCONNECT, ()=>{
                console.log("user disconnected")
            })
        })
    }
}
