export type AuthContextType = {
    isAuth : boolean,
    user : Object | null,
    setUser : ( user: Object )=>void
}