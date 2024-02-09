import socket, { Socket } from "socket.io"
import { Server } from "http"
import { CONNECTION, DISCONNECT } from "../../constants/socket"
import { authentication } from "./authentication"
import { createNewGame, getGame, getMatrix, updateGame } from "../../utils/database"
import Player from "../../classes/Player"
import { GAME_FOUND, GAME_GET, GAME_MOVE, GAME_SEARCHING, GET_MATRIX } from "../../../global-constants"
import { checkGameState, getEmptyMatrix } from "../../utils/game"
import Game from "../../classes/Game"
import { GameMove } from "../../types/socket"
import { X } from "../../constants/game"

export default {
    getIo : (server: Server)=>{
        let search: (Player & { socketId : string | number })[] = []

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

            socket.on(GAME_MOVE, (data)=>{
                const gameMoves: GameMove = data.game                
                const moveHandle = async ()=>{
                    if(firstPlayer.game_id){
                        const game = await getGame(firstPlayer.game_id)
                        const matrix = JSON.parse(game.matrix)
                        matrix[gameMoves.row][gameMoves.column] = X
                        console.log(checkGameState(matrix));
                        await updateGame(firstPlayer.game_id, matrix)
                        io.to(firstPlayer.game_id.toString()).emit(GAME_MOVE, { matrix })
                    }
                }
                moveHandle()
            })


            if(firstPlayer.game_id){
                socket.join(firstPlayer.game_id.toString())
                const sendMatrix = async ()=>{
                    if(firstPlayer.game_id){
                        // const matrix = await getMatrix(firstPlayer.game_id)
                        const game = await getGame(firstPlayer.game_id)
                        socket.emit(GAME_GET, {message : "in game", matrix : JSON.parse(game.matrix), game: {
                            id: game.id
                        }})
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
                    // console.log(firstPlayer, secondPlayer);
                    const roomId = await createNewGame(secondPlayer.id, firstPlayer.id)
                    socket.emit(GAME_FOUND, {access : true, matrix, game : {id : roomId}})     
                    io.in(secondPlayer.socketId.toString()).emit(GAME_FOUND, {access : true, matrix, game : {id : roomId}})
                    if(roomId){
                        socket.join(roomId.toString())
                        io.in(secondPlayer.socketId.toString()).socketsJoin(roomId.toString())
                        const game = new Game(roomId, matrix, 0, 0, firstPlayer, secondPlayer, io, socket)
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
                search = search.filter(player=>player.id !== firstPlayer.id)
                if(firstPlayer.game_id){
                    socket.leave(firstPlayer.game_id.toString())
                }
            })
        })
    }
}
