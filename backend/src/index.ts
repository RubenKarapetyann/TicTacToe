import express, { Request, Response } from "express"
import { AUTH, TEST } from "../constants/routes-constants"
import authentication from "./authentication/layout"

const app = express()
const port = process.env.PORT || 3000

app.use(AUTH,authentication)

app.get(TEST,(req : Request,res : Response)=>{
    res.json({
        access : true
    })
})

app.listen(port,()=>{
    console.log(process.env.PORT)
})
