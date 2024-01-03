import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { CellProps } from "../../types/components/game";
import { ASSETS } from "../../constants/game/assets";

export default function Cell({ value, moveHandle, row, column }: CellProps){
    const handle = ()=> moveHandle(row, column)

    return (
        <TouchableHighlight style={styles.container} onPress={handle}>
            <Text style={styles.text}>{ASSETS[value]}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "green",
        width : 90,
        height : 90,
        justifyContent : "center",
        alignItems : "center"
    },
    text : {
        color : "white"
    }
})