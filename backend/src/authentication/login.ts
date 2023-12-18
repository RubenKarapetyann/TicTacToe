import express, { Request, Response } from "express"
import { getUserBy } from "../../utils/database"
import { compare } from "../../utils/hash"
import { generateJwtToken } from "../../utils/jwt"

const router = express.Router()

router.post("/",async (req: Request, res: Response)=>{
    const { name, password } = req.body
    const user = await getUserBy("name", name)

    if(!user){
        return res.status(404).json({access : false, message : "username is incorrect"})
    }

    const correctPassword = await compare(password, user.password)
    if(!correctPassword){
        return res.status(401).json({access : false, message : "password is incorrect"})
    }

    const token = generateJwtToken(user.name, user.id)
    return res.status(200).json({access : true, message : "ok", token})
})

export default router