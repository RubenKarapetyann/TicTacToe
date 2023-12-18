import express from "express"
import register from "./register"
import login from "./login"
import { LOGIN, REG } from "../../constants/routes-constants"
import passport from "passport"
import strategy from "./strategy"



const router = express.Router()

router.use(passport.initialize())
passport.use(strategy)
router.use(REG,register)
router.use(LOGIN,login)

export default router