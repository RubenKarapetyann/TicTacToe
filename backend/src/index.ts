import express, { Request, Response } from "express"
import { AUTH, TEST } from "../constants/routes-constants"
import authentication from "./authentication/layout"
import pool from "../database/pool"
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())


app.use(AUTH,authentication)

app.get(TEST,async (req : Request,res : Response)=>{
    const result = await pool.query("SELECT * FROM users")
    res.json({
        access : true,
        data : result[0]
    })
})

app.listen(port,()=>{
    console.log(process.env.PORT)
})
