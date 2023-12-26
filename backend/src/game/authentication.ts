import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import jwt from "jsonwebtoken"
import { AUTH_FAILED } from "../../constants/socket";
import { getUserBy } from "../../utils/database";


export const authentication = (socket: Socket, next: (err?: ExtendedError | undefined) => void)=>{
    const auth = socket.handshake.auth

    if(!auth.token){
        return socket.emit(AUTH_FAILED, { status : 401, message: "auth failed", access : false })
    }
    const token: string = auth.token
    const secret = process.env.JWT_SECRET
    if(!secret){
        throw new Error("jwt secret is undefined")
    }

    try{
        const getUser = async ()=>{
            const decoded = jwt.verify(token, secret)
            if(!decoded.sub || typeof decoded.sub === "function"){
                return
            }
            const user = await getUserBy("id", decoded.sub)
            socket.handshake.auth.user = user
            next()
        }
        getUser()
    }catch(err){
        console.log('token is incorrect')
        return socket.emit(AUTH_FAILED, { status : 401, message: "auth failed", access : false })
    }
}