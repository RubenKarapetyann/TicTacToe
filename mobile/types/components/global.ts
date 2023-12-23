export type InputProps = {
    placeholder? : string,
    initialValue? : string,
}

export type ButtonProps = {
    text : string,
    handle : ()=> void,
    form? : string,
    icon? : string
}