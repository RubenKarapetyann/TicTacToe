import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ManuTabsParamList } from "../types/navigation/ManuTabsTypes"
import { MANU_TABS_ARR, MANU_TABS_MAP } from "../constants/navigation/manu-tabs-constants"
import { ITabItem } from "../types/navigation/global"
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons"
import PALETTE from "../constants/styles/palette-constants"

const Tabs = createBottomTabNavigator<ManuTabsParamList>()

export default function ManuTabs(){
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const iconSize = focused ? size+7 : size
                    const iconName:string = MANU_TABS_MAP[route.name].icon    
                    return <Ionicons name={iconName} size={iconSize} color={color} />
                },
                tabBarActiveTintColor: PALETTE.primary,
                tabBarInactiveTintColor: 'gray',
            })}>
            {MANU_TABS_ARR.map((tab:ITabItem)=>{
                return (
                    <Tabs.Screen
                        key={tab.id}
                        component={tab.screen}
                        name={tab.name}
                    />
                )
            })}
        </Tabs.Navigator>
    )
}