import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: object | string)=>{
    try{
        const obj = {
            date : new Date().getTime(),
            data : value
        }
        const json = JSON.stringify(obj)
        await AsyncStorage.setItem(key, json) 
    }catch(err){
        console.log(err);
    }
}

export const getItem = async (key: string)=>{
    try{
        const json = await AsyncStorage.getItem(key)
        if(!json)
            return

        const obj = JSON.parse(json)

        return obj.data
    }catch(err){
        console.log(err);
    }
}