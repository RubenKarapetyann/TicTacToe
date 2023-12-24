import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginForm from "../../components/form/LoginForm";
import { LoginProps } from "../../types/navigation/RootStackTypes";
import PALETTE from "../../constants/styles/palette-constants";
import { MANU, REGISTER } from "../../constants/navigation/root-stack-constants";

export default function Login({ navigation }: LoginProps){
    const goToRegister = ()=> navigation.navigate(REGISTER)
    const goToManu = ()=> navigation.navigate(MANU)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Login</Text>
            </View>
            <LoginForm navigate={goToManu}/>
            <TouchableOpacity style={styles.registerButton} onPress={goToRegister}>
                <Text>don't have account? </Text>
                <Text style={styles.registerText}>create it!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    registerText : {
        color : PALETTE.secondary,
    },
    registerButton : {
        flexDirection : "row",
        marginTop : 20
    },
    container : {
        alignItems : "center",
        height : "100%",
        justifyContent : "center"
    },
    titleText : {
        fontSize : 23
    }
})