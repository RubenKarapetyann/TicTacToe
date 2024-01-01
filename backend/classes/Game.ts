import { Server, Socket } from "socket.io"
import Player from "./Player"
import { GAME_SEARCHING } from "../../global-constants"
import { DefaultEventsMap } from "socket.io/dist/typed-events"

export default class Game {
    id: string | number
    matrix: Array<Array<number>>
    round: number
    move: number
    player1: Player
    player2: Player
    socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>

    constructor(id: string | number, matrix: Array<Array<number>>, round: number, move: number, player1: Player,player2: Player, socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>){
        this.id = id
        this.matrix = matrix
        this.round = round
        this.move = move
        this.player1 = player1
        this.player2 = player2
        this.socket = socket
    }

    start(){
        this.socket.in(this.id.toString()).emit(GAME_SEARCHING)
    }
}