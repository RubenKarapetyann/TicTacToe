export type InputProps = {
    placeholder? : string,
    value : string,
    changeHandle : (value: string)=> void
}

export type ButtonProps = {
    text : string,
    handle : ()=> void,
    icon? : string
}