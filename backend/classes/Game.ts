import { Server, Socket } from "socket.io"
import Player from "./Player"
import { DefaultEventsMap } from "socket.io/dist/typed-events"
import { Matrix } from "../types/game"

export default class Game {
    id: string | number
    matrix: Matrix
    round: number
    move: number
    player1: Player
    player2: Player
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
    socket: Socket
    

    constructor(id: string | number, matrix: Matrix, round: number, move: number, player1: Player,player2: Player, io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket){
        this.id = id
        this.matrix = matrix
        this.round = round
        this.move = move
        this.player1 = player1
        this.player2 = player2
        this.socket = socket
        this.io = io
    }

    start(){

    }
}