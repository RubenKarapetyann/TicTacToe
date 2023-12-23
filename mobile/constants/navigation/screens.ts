import Game from "../../screens/root-screens/Game";
import Login from "../../screens/root-screens/Login";
import Manu from "../../screens/root-screens/Manu";
import Register from "../../screens/root-screens/Register";
import { IStackScreens } from "../../types/navigation/RootStackTypes";
import { GAME, LOGIN, MANU, REGISTER } from "./root-stack-constants";

export const ROOT_STACK_SCREENS: IStackScreens  = {
    [MANU] : Manu,
    [REGISTER] : Register,
    [LOGIN] : Login,
    [GAME] : Game
}