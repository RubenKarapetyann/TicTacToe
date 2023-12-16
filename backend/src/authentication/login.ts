import express from "express"

const router = express.Router()

router.get("/",(req,res)=>{
    res.json("login")
})

export default router