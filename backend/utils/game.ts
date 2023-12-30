import { EMPTY } from "../constants/game"

export const getEmptyMatrix = (size=3)=>{
    const matrix: Array<Array<number>> | [] = []
    for(let i = 0; i < size; i++){
        matrix[i] = []
        for(let j = 0; j < size; j++){
            matrix[i][j] = EMPTY
        }
    }

    return matrix
}