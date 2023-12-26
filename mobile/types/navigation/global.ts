
export interface IStackItem {
    name : "Manu" | "Game" | "Login" | "Register",
    displayName : string,
    id : number,
}

export interface ITabItem {
    name : "Collection" | "Shop" | "Fight",
    displayName : string,
    id : number,
    icon : string
}

export type Navigate = ()=> void


export type Navigation = {
    navigate : Navigate
}