import { FunctionComponent } from "react";

export interface IStackItem {
    name : "Manu" | "Game",
    displayName : string,
    id : number,
    screen : FunctionComponent
}
