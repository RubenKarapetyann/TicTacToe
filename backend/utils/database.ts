import pool from "../database/pool"
import { hash } from "./hash";
import { RowDataPacket } from "mysql2"

export const query = async (queryText : string, values? : Array<string | number>)=>{
    try {
        return (await pool.query<RowDataPacket[]>(queryText,values))[0][0]
    }catch(err){
        console.log(err);
    }
}

export const getUserBy = async (key : string, value : number | string )=> {
    return await query(`SELECT * FROM users WHERE users.${key} = ?`,[value])
}

export const addUser = async (name: string, password:string)=> {
    const hashedPassword = await hash(password.toString())
    return await query("INSERT INTO users(name, password, trophies) VALUES (?, ?, 0)", [name, hashedPassword])
}