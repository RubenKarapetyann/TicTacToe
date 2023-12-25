import { ReactNode } from "react"

export type InputProps = {
    placeholder? : string,
    value : string,
    changeHandle : (value: string)=> void,
    type? : "password" | "text",
    color? : string
}

export type ButtonProps = {
    text : string,
    handle : ()=> void,
    icon? : string
}

export type Children = {
    children: ReactNode 
}