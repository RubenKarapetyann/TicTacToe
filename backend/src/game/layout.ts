import socket, { Socket } from "socket.io"
import { Server } from "http"
import { CONNECTION } from "../../constants/socket"


export default {
    getIo : (server: Server)=>{
        const io = new socket.Server(server, {
            cors : {
                origin: "*",
                methods: ["GET", "POST"]
            }
        })

        io.on(CONNECTION,(socket: Socket)=>{
            console.log("user connected")
        })
    }
}
