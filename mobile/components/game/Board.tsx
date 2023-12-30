import { StyleSheet, View } from "react-native";
import { BoardProps } from "../../types/components/game";
import Row from "./Row";

export default function Board({ matrix, moveHandle }: BoardProps){
    return (
        <View style={styles.container}>
            {matrix.map((row,i)=>{
                return <Row row={row} key={i} index={i} moveHandle={moveHandle}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "aqua",
        width : 300,
        height : 300,
        justifyContent : "space-around"
    }
})