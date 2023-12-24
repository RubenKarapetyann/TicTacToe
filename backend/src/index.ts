import express, { Request, Response } from "express"
import { AUTH, TEST } from "../constants/routes-constants"
import authentication from "./authentication/layout"
import pool from "../database/pool"
import cors from "cors"
import passport from "passport"
import http from "http"
import socketIo from "./game/layout"

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000
socketIo.getIo(server)


app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())


app.use(AUTH,authentication)

app.get(TEST, async (req : Request,res : Response)=>{
    const result = await pool.query("SELECT * FROM users")
    res.json({
        access : true,
        data : result[0]
    })
})

server.listen(port,()=>{
    console.log(process.env.PORT)
})
