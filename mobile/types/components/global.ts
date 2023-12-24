export type InputProps = {
    placeholder? : string,
    value : string,
    changeHandle : (value: string)=> void,
    type? : "password" | "text"
}

export type ButtonProps = {
    text : string,
    handle : ()=> void,
    icon? : string
}