import { GAME } from "../../constants/navigation/root-stack-constants";
import ManuTabs from "../../navigation/ManuTabsNavigation";
import { ManuProps } from "../../types/navigation/RootStackTypes";

export default function Manu({ navigation }: ManuProps){ 
    const goToGame = ()=> navigation.navigate(GAME)
    
    return (
        <>
            <ManuTabs navigate={goToGame}/>
        </>
    )
}