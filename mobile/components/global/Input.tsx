import { StyleSheet, TextInput, View } from "react-native";
import PALETTE from "../../constants/styles/palette-constants";
import { InputProps } from "../../types/components/global";
import { useState } from "react";

export default function Input({ placeholder="", initialValue="" }: InputProps){
    const [value, setValue] = useState<string>(initialValue)
    const [focused, setFocused] = useState<boolean>(false)
    
    const changeHandle = (text: string)=>{
        setValue(text)
    }
    
    const focusHandle = ()=> setFocused(true)
    const blurHandle = ()=> setFocused(false)

    return (
        <View style={styles.container}>
            <TextInput 
                onFocus={focusHandle}
                onBlur={blurHandle}
                placeholder={placeholder} 
                style={[styles.input, focused ? styles.focused : styles.static]}
                value={value}
                onChangeText={changeHandle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        borderBottomColor : PALETTE.border,
        width : 300,
        height : 55
    },
    focused : {
        borderBottomWidth : 1,
    },
    static : {
        borderBottomWidth : 0.5,
    },
    container : {
        width : 350,
        justifyContent : "center",
        display : "flex",
        alignItems : "center",
        padding : 15
    }
})  