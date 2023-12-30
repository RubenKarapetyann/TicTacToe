import { ADD_GAME, ADD_USER, GET_GAME, SET_GAME_ID } from "../constants/database";
import pool from "../database/pool"
import { hash } from "./hash";
import { RowDataPacket, ResultSetHeader } from "mysql2"

export const query = async (queryText : string, values? : Array<string | number>)=>{
    try {
        return (await pool.query<RowDataPacket[]>(queryText,values))[0][0]
    }catch(err){
        console.log(err);
    }
}

export const queryWithInfo = async (queryText : string, values? : Array<string | number>)=>{
    try {
        return await pool.query<ResultSetHeader>(queryText,values)
    }catch(err){
        console.log(err);
    }
}

export const getUserBy = async (key : string, value : number | string )=> {
    return await query(`SELECT * FROM users WHERE users.${key} = ?`,[value])
}


export const addUser = async (name: string, password:string)=> {
    const hashedPassword = await hash(password.toString())
    return await query(ADD_USER, [name, hashedPassword])
}

export const addGame = async (id_1: string | number, id_2: string | number)=>{
    return await query(ADD_GAME, [id_1, id_2])
}

export const setGameIdToUser = async (id: string | number, gameId: string | number)=>{
    return await query(SET_GAME_ID, [gameId, id])
}

export const createNewGame = async (id_1: string | number, id_2: string | number)=>{
    const game = await queryWithInfo(ADD_GAME, [id_1, id_2])
    if(game){
        const result = game[0]
        await setGameIdToUser(id_1, result.insertId)
        await setGameIdToUser(id_2, result.insertId)
    }
}

export const getMatrix = async (id: number | string)=>{
    const game = await query(GET_GAME,[id])
    if(!game){
        throw Error("game is not found")
    }
    return game.matrix
}