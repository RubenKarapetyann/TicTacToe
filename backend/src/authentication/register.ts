import express, { Request, Response } from "express"
import { addUser, getUserBy, query } from "../../utils/database"

const router = express.Router()

router.post("/",async (req: Request, res: Response)=>{
    try { 
        const { name, password } = req.body
        const user = await getUserBy("name",name)
        
        if(user){
            return res.status(422).json({
                access : false,
                message : "username already used",
                error : "name"
            })
        }

        await addUser(name, password)
        return res.status(200).json({
            access : true,
            message : "user created successfully"
        })
    }catch(err){
        console.log(err);
    }
})


export default router