export default class Player {
    id : string | number
    trophies : number
    name : string
    game_id: string | number | undefined

    constructor(id: string | number, name : string, trophies : number, game_id: string | number | undefined){
        this.id = id
        this.trophies = trophies
        this.name = name
        this.game_id = game_id
    }
} 