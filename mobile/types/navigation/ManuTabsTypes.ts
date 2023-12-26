import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { COLLECTION, FIGHT, SHOP } from "../../constants/navigation/manu-tabs-constants"
import { FunctionComponent } from "react"
import { Navigate } from "./global"


export type ManuTabsParamList = {
    [SHOP] : undefined,
    [FIGHT] : { navigate: Navigate },
    [COLLECTION] : undefined
}


export type ShopProps = BottomTabScreenProps<ManuTabsParamList, "Shop">
export type FightProps = BottomTabScreenProps<ManuTabsParamList, "Fight">
export type CollectionProps = BottomTabScreenProps<ManuTabsParamList, "Collection">

export interface IManuTabScreens {
    [SHOP] : FunctionComponent<any>,
    [FIGHT] : FunctionComponent<any>,
    [COLLECTION] : FunctionComponent<any>,
}