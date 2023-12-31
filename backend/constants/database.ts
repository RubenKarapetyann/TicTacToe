export const ADD_USER = "INSERT INTO users(name, password, trophies) VALUES (?, ?, 0)"
export const ADD_GAME = "INSERT INTO games(player1_id, player2_id) VALUES (?,?)"
export const SET_GAME_ID = "UPDATE users SET game_id=? WHERE id=?"
export const GET_GAME = "SELECT * FROM games WHERE id=?"