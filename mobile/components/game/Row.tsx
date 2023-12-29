import { StyleSheet, View } from "react-native";
import { RowProps } from "../../types/components/game";
import Cell from "./Cell";

export default function Row({ row }: RowProps){
    return (
        <View style={styles.container}>
            {row.map(value=>{
                return <Cell value={value} key={Math.random()}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "space-around"
    }
})