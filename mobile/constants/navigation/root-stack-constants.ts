import { IStackItem } from "../../types/navigation/global"

export const MANU = "Manu"
export const MANU_OBJECT : IStackItem = {
    name : MANU,
    displayName : "Manu",
    id : 1,
}

export const GAME = "Game"
export const GAME_OBJECT : IStackItem = {
    name : GAME,
    displayName : "Game",
    id : 2,
}

export const LOGIN = "Login"
export const LOGIN_OBJECT: IStackItem = {
    name : LOGIN,
    displayName : "Login",
    id : 3,
}

export const REGISTER = "Register"
export const REGISTER_OBJECT: IStackItem = {
    name : REGISTER,
    displayName : "Register",
    id : 4,
}

export const STACK_ARR : IStackItem[] = [ MANU_OBJECT, GAME_OBJECT, LOGIN_OBJECT, REGISTER_OBJECT ]