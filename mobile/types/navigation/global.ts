import { FunctionComponent } from "react";

export interface IStackItem {
    name : "Manu" | "Game",
    displayName : string,
    id : number,
    screen : FunctionComponent
}

export interface ITabItem {
    name : "Collection" | "Shop" | "Fight",
    displayName : string,
    id : number,
    screen : FunctionComponent,
    icon : string
}