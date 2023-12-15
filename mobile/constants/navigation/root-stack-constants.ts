import Game from "../../screens/root-screens/Game"
import Manu from "../../screens/root-screens/Manu"
import { IStackItem } from "../../types/navigation/global"

export const MANU = "Manu"
export const MANU_OBJECT : IStackItem = {
    name : MANU,
    displayName : "Manu",
    id : 1,
    screen : Manu
}

export const GAME = "Game"
export const GAME_OBJECT : IStackItem = {
    name : GAME,
    displayName : "Game",
    id : 2,
    screen : Game
}



export const STACK_ARR : IStackItem[] = [ MANU_OBJECT, GAME_OBJECT ]