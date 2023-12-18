import jwt from "jsonwebtoken"

export const generateJwtToken = (name: string, id: string)=> {
    const secret = process.env.JWT_SECRET
    if(!secret){
        return
    }

    const options = {
        name,
        id
    }
    return jwt.sign(options, secret)
}