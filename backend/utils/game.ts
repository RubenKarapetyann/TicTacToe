import { CONTINUE, DRAW, EMPTY } from "../constants/game"
import { Matrix } from "../types/game"

export const getEmptyMatrix = (size=3)=>{
    const matrix: Array<Array<number>> = []
    for(let i = 0; i < size; i++){
        matrix[i] = []
        for(let j = 0; j < size; j++){
            matrix[i][j] = EMPTY
        }
    }

    return matrix
}

export const checkGameState = (matrix: Matrix)=>{
    const	currentDiagonal1 = matrix[0][0]
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][i] !== currentDiagonal1 || currentDiagonal1 === EMPTY){
            break
        }
        if(i === matrix.length - 1){
                return currentDiagonal1
        }
    }
      const	currentDiagonal2 = matrix[matrix.length-1][0]
      for(let i = matrix.length - 1; i >= 0; i--){
        if(matrix[i][matrix.length-1-i] !== currentDiagonal2 || currentDiagonal2 === EMPTY){
            break
        }
        if(i === 0){
            return currentDiagonal2
        }
    }
    for(let i = 0; i < matrix.length; i++){
        const currentRow = matrix[i][0]
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] !== currentRow || currentRow === EMPTY){
                break
            }     
            if(j === matrix[i].length - 1){
                return currentRow
            }
       }
      const currentColumn = matrix[0][i]
      for(let m = 0; m < matrix[i].length; m++){
        if(matrix[m][i] !== currentColumn || currentColumn === EMPTY){
            break	
        }
        if(m === matrix[i].length - 1){
            return currentColumn
        }
      }
    }

      
    const checkDraw = JSON.stringify(matrix)
    if(!checkDraw.includes(EMPTY.toString())){
        return DRAW
    }
    
    return CONTINUE
}