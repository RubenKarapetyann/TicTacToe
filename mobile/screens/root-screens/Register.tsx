import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RegisterForm from "../../components/form/RegisterForm";
import { RegisterProps } from "../../types/navigation/RootStackTypes";
import { LOGIN } from "../../constants/navigation/root-stack-constants";
import PALETTE from "../../constants/styles/palette-constants";

export default function Register({ navigation }: RegisterProps){
    const goToLogin = ()=> navigation.navigate(LOGIN)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Register</Text>
            </View>
            <RegisterForm/>
            <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
                <Text>already have account? </Text>
                <Text style={styles.loginText}>login!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginText : {
        color : PALETTE.secondary,
    },
    loginButton : {
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