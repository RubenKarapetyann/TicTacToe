export type CellProps = {
    value : number,
    moveHandle: (row: number, column: number)=>void,
    row: number, 
    column : number
}

export type BoardProps = {
    matrix: [][],
    moveHandle: (row: number, column: number)=>void
}

export type RowProps = {
    row : number[],
    moveHandle: (row: number, column: number)=>void,
    index: number
}