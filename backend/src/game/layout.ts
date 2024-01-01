import socket, { Socket } from "socket.io"
import { Server } from "http"
import { CONNECTION, DISCONNECT } from "../../constants/socket"
import { authentication } from "./authentication"
import { createNewGame, getMatrix } from "../../utils/database"
import Player from "../../classes/Player"
import { GAME_FOUND, GAME_SEARCHING, GET_MATRIX } from "../../../global-constants"
import { getEmptyMatrix } from "../../utils/game"
import Game from "../../classes/Game"

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
                const sendMatrix = async ()=>{
                    if(firstPlayer.game_id){
                        const matrix = await getMatrix(firstPlayer.game_id)
                        socket.emit(GET_MATRIX, {message : "in game", matrix})
                    }
                }
                return sendMatrix()
            }

            if(search.length){
                const secondPlayer: (Player & { socketId : string | number }) | undefined = search.pop()
                if(!secondPlayer){
                    socket.emit(GAME_SEARCHING)
                    search.push({
                        ...firstPlayer,
                        socketId : socket.id
                    })
                    return
                }

                const createGame = async ()=>{
                    const matrix = getEmptyMatrix()
                    io.in(secondPlayer.socketId.toString()).emit(GAME_FOUND, {access : true, matrix})
                    socket.emit(GAME_FOUND, {access : true, matrix})     
                    // console.log(firstPlayer, secondPlayer);
                    const roomId = await createNewGame(secondPlayer.id, firstPlayer.id)
                    if(roomId){
                        socket.join(roomId.toString())
                        io.in(secondPlayer.socketId.toString()).socketsJoin(roomId.toString())
                        const game = new Game(roomId, matrix, 0, 0, firstPlayer, secondPlayer, io)
                        game.start()
                    }
                }
                createGame()
            }else{
                socket.emit(GAME_SEARCHING)
                search.push({
                    ...firstPlayer,
                    socketId : socket.id
                })
            } 

            socket.on(DISCONNECT, ()=>{
                console.log("user disconnected")
                if(firstPlayer.game_id){
                    socket.leave(firstPlayer.game_id.toString())
                }
            })
        })
    }
}
