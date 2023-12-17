import bcrypt from "bcrypt"
import { HASH_SALT } from "../constants/utils"

export const hash = async (password : string)=> await bcrypt.hash(password, HASH_SALT)

export const compare = async (password : string, hash : string)=> await bcrypt.compare(password, hash)
