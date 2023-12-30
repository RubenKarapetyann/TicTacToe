import { StyleSheet, View } from "react-native";
import { RowProps } from "../../types/components/game";
import Cell from "./Cell";

export default function Row({ row, moveHandle, index }: RowProps){
    return (
        <View style={styles.container}>
            {row.map((value,i)=>{
                return <Cell 
                    value={value} 
                    key={Math.random()} 
                    moveHandle={moveHandle} 
                    row={index} 
                    column={i}
                />
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