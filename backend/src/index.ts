import express, { Request, Response } from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/test",(req : Request,res : Response)=>{
    res.json({
        access : true
    })
})

app.listen(port,()=>{
    console.log(process.env.PORT)
})
