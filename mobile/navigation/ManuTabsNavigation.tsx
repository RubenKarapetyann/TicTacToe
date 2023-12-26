import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ManuTabsParamList } from "../types/navigation/ManuTabsTypes"
import { FIGHT, MANU_TABS_ARR, MANU_TABS_MAP } from "../constants/navigation/manu-tabs-constants"
import { ITabItem } from "../types/navigation/global"
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons"
import PALETTE from "../constants/styles/palette-constants"
import { MANU_TABS_SCREENS } from "../constants/navigation/screens"
import { Navigation } from "../types/navigation/global"

const Tabs = createBottomTabNavigator<ManuTabsParamList>()

export default function ManuTabs({ navigate }: Navigation){
    
    return (
        <Tabs.Navigator
            initialRouteName={FIGHT}
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
                        component={MANU_TABS_SCREENS[tab.name]}
                        name={tab.name}
                        initialParams={{navigate}}
                    />
                )
            })}
        </Tabs.Navigator>
    )
}