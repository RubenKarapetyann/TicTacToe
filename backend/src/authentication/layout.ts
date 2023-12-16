import express from "express"
import register from "./register"
import login from "./login"
import { LOGIN, REG } from "../../constants/routes-constants"

const router = express.Router()

router.use(REG,register)
router.use(LOGIN,login)

export default router