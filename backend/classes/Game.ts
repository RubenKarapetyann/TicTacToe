export default class Game {
    id: string | number
    matrix: Array<Array<number>>
    round: number
    move: number
    player1_id: number | string
    player2_id: number | string

    constructor(id: string | number, matrix: [][], round: number, move: number, player1_id: number | string,player2_id: number | string){
        this.id = id
        this.matrix = matrix
        this.round = round
        this.move = move
        this.player1_id = player1_id
        this.player2_id = player2_id
    }
}