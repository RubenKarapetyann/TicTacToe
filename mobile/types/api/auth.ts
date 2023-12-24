export type AuthResponseType = {
    access : boolean,
    message : string,
    error? : "name" | "password",
    token? : string,
}