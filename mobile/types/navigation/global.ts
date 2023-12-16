import { FunctionComponent } from "react";

export interface IStackItem {
    name : "Manu" | "Game",
    displayName : string,
    id : number,
    screen : FunctionComponent
}

export interface ITabItem {
    name : string,
    displayName : string,
    id : number,
    screen : FunctionComponent,
    icon : string
}