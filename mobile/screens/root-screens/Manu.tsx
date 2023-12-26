import { useEffect } from "react";
import { GAME, LOGIN } from "../../constants/navigation/root-stack-constants";
import { useAuth } from "../../context/auth-context";
import ManuTabs from "../../navigation/ManuTabsNavigation";
import { ManuProps } from "../../types/navigation/RootStackTypes";

export default function Manu({ navigation }: ManuProps){ 
    const isAuth = useAuth()?.isAuth
    const goToGame = ()=> navigation.navigate(GAME)
    
    useEffect(()=>{
        if(!isAuth){
            navigation.navigate(LOGIN)
        }  
    },[])

    return (
        <>
            <ManuTabs navigate={goToGame}/>
        </>
    )
}