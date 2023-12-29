import { StyleSheet, Text, View } from "react-native";
import { CellProps } from "../../types/components/game";
import { ASSETS } from "../../constants/game/assets";

export default function Cell({ value }: CellProps){
    return (
        <View style={styles.container}>
            <Text>{ASSETS[value]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "green",
        width : 90,
        height : 90
    }
})