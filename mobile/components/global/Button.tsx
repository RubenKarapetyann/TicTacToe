import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ButtonProps } from "../../types/components/global"
import PALETTE from "../../constants/styles/palette-constants"
import { useState } from "react"
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons"


export default function Button({ text="", handle, form, icon }: ButtonProps){
    const [hold, setHold] = useState<boolean>(false)

    const focusHandle = ()=> setHold(true)
    const blurHandle = ()=> setHold(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handle} style={[styles.button, {
                width : hold ? 90 : 100,
                height : hold ? 35 : 40
            }]} onPressIn={focusHandle} onPressOut={blurHandle}>
                { icon ? <Ionicons name={icon} size={20} color={PALETTE.text}/> : <Text style={styles.text}>{text}</Text> }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : PALETTE.accent,
        borderRadius : 5
    },
    text : {
        fontSize : 16
    },
    container : {
        width : 100,
        justifyContent : "center",
        alignItems : "center",
        height : 40
    }
})