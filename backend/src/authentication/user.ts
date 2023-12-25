import express, { Request, Response } from "express"
import passport from "passport"

const router = express.Router()

router.get("/", passport.authenticate("jwt", {session : false}), (req: Request, res: Response)=>{
    const user: any = req.user
    if(!user){
        return res.status(404).json({ message : "user not found", access : false })
    }

    return res.json({
        access : true,
        user : {
            id : user.id,
            name : user.name
        }
    })
})

export default router