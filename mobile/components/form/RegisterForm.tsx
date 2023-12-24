import { StyleSheet, View } from "react-native"
import Input from "../global/Input"
import { useState } from "react"
import Button from "../global/Button"
import { apiCall } from "../../utils/api/api"
import endpoints from "../../utils/api/endpoints"
import { POST } from "../../constants/api/api-constants"
import { Navigation } from "../../types/navigation/RootStackTypes"

export default function RegisterForm({ navigate }: Navigation){
    const [ values, setValues ] = useState({
        name : "",
        password : "",
        repeatPassword : ""
    })

    const nameHandle = (name: string) => setValues(values=>({...values, name}))
    const passwordHandle = (password: string) => setValues(values=>({...values, password}))
    const repeatPasswordHandle = (password: string) => setValues(values=>({...values, repeatPassword: password}))

    const submitHandle = async ()=>{
        const result = await apiCall(POST, endpoints().reg, {
            name : values.name,
            password : values.password
        })
        if(result.access){
            navigate()
        }
    }

    return (
        <View style={styles.container}>
            <Input value={values.name} placeholder="name" changeHandle={nameHandle}/>
            <Input value={values.password} type="password" placeholder="password" changeHandle={passwordHandle}/>
            <Input value={values.repeatPassword} type="password" placeholder="repeat password" changeHandle={repeatPasswordHandle}/>
            <Button text="Register" handle={submitHandle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    }
})