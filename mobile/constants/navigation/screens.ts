import Collection from "../../screens/manu-screens/Collection";
import Fight from "../../screens/manu-screens/Fight";
import Shop from "../../screens/manu-screens/Shop";
import Game from "../../screens/root-screens/Game";
import Login from "../../screens/root-screens/Login";
import Manu from "../../screens/root-screens/Manu";
import Register from "../../screens/root-screens/Register";
import { IManuTabScreens } from "../../types/navigation/ManuTabsTypes";
import { IStackScreens } from "../../types/navigation/RootStackTypes";
import { COLLECTION, FIGHT, SHOP } from "./manu-tabs-constants";
import { GAME, LOGIN, MANU, REGISTER } from "./root-stack-constants";

export const ROOT_STACK_SCREENS: IStackScreens  = {
    [MANU] : Manu,
    [REGISTER] : Register,
    [LOGIN] : Login,
    [GAME] : Game
}

export const MANU_TABS_SCREENS: IManuTabScreens = {
    [FIGHT] : Fight,
    [COLLECTION] : Collection,
    [SHOP] : Shop
}