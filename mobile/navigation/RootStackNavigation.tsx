import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation/RootStackTypes";
import { MANU, STACK_ARR } from "../constants/navigation/root-stack-constants";
import { IStackItem } from "../types/navigation/global";
import { ROOT_STACK_SCREENS } from "../constants/navigation/screens";

const Stack = createStackNavigator<RootStackParamList>()


export default function RootStack(){
    return (
        <Stack.Navigator initialRouteName={MANU} screenOptions={{
            headerShown : false
        }}>
            {STACK_ARR.map((stack:IStackItem)=>{
                return (
                    <Stack.Screen
                        component={ROOT_STACK_SCREENS[stack.name]}
                        name={stack.name}
                        key={stack.id}
                    />
                )
            })}
        </Stack.Navigator>
    )
}