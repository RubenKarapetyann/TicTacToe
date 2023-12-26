import socket, { Socket } from "socket.io"
import { Server } from "http"
import { CONNECTION, DISCONNECT } from "../../constants/socket"
import { authentication } from "./authentication"

export default {
    getIo : (server: Server)=>{
        const search = []

        const io = new socket.Server(server, {
            cors : {
                origin: "*",
                methods: ["GET", "POST"]
            }
        })

        io.use(authentication)

        io.on(CONNECTION,(socket: Socket)=>{
            console.log(socket.handshake.auth.user);            

            socket.on(DISCONNECT, ()=>{
                console.log("user disconnected")
            })
        })
    }
}
