import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation/RootStackTypes";
import { LOGIN, MANU, STACK_ARR } from "../constants/navigation/root-stack-constants";
import { IStackItem } from "../types/navigation/global";
import { ROOT_STACK_SCREENS } from "../constants/navigation/screens";
import { useAuth } from "../context/auth-context";

const Stack = createStackNavigator<RootStackParamList>()


export default function RootStack(){
    const isAuth = useAuth()?.isAuth

    return (
        <Stack.Navigator initialRouteName={isAuth ? MANU : LOGIN} screenOptions={{
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