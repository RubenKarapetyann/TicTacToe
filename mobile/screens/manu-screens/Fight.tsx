import { Text } from "react-native";
import { FightProps } from "../../types/navigation/ManuTabsTypes";
import Button from "../../components/global/Button";

export default function Fight({ navigation, route }: FightProps){
    const { navigate } = route.params
    const onPlay = ()=>navigate()

    return (
        <>
            <Text>fight</Text>    
            <Button text="Fight" handle={onPlay}/>    
        </>
    )
}