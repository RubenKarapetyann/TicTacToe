import { ITabItem } from "../../types/navigation/global"

export const FIGHT = "Fight"
export const FIGHT_OBJECT: ITabItem = {
    name : FIGHT,
    displayName : "бой",
    icon : "sword-cross",
    id : 1,
}

export const SHOP = "Shop"
export const SHOP_OBJECT: ITabItem = {
    name : SHOP,
    displayName : "магазин",
    icon : "shopping",
    id : 2,
}


export const COLLECTION = "Collection"
export const COLLECTION_OBJECT: ITabItem = {
    name : COLLECTION,
    displayName : "коллекция",
    icon : "cards",
    id : 3,
}

export const MANU_TABS_ARR: ITabItem[] = [ SHOP_OBJECT, FIGHT_OBJECT, COLLECTION_OBJECT ]
export const MANU_TABS_MAP = {
    [SHOP] : SHOP_OBJECT,
    [FIGHT] : FIGHT_OBJECT,
    [COLLECTION] : COLLECTION_OBJECT
}