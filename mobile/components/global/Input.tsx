import { StyleSheet, TextInput, View } from "react-native";
import PALETTE from "../../constants/styles/palette-constants";
import { InputProps } from "../../types/components/global";
import { useState } from "react";

export default function Input({ placeholder="", value, changeHandle, type="text", color=PALETTE.border }: InputProps){
    const [focused, setFocused] = useState<boolean>(false)
        
    const focusHandle = ()=> setFocused(true)
    const blurHandle = ()=> setFocused(false)

    return (
        <View style={styles.container}>
            <TextInput 
                secureTextEntry={type==="password"}
                onFocus={focusHandle}
                onBlur={blurHandle}
                placeholder={placeholder} 
                style={[styles.input, focused ? styles.focused : styles.static, {
                    borderBottomColor : color
                }]}
                placeholderTextColor={color}
                value={value}
                onChangeText={changeHandle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
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