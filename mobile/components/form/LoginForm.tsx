import { StyleSheet, View } from "react-native"
import Input from "../global/Input"
import { useState } from "react"
import Button from "../global/Button"
import { apiCall } from "../../utils/api/api"
import endpoints from "../../utils/api/endpoints"
import { POST } from "../../constants/api/api-constants"
import { setJwtToken } from "../../utils/storage/jwt"
import { Navigation } from "../../types/navigation/RootStackTypes"

export default function LoginForm({ navigate }: Navigation){
    const [ values, setValues ] = useState({
        name : "",
        password : ""
    })

    const nameHandle = (name: string) => setValues(values=>({...values, name}))
    const passwordHandle = (password: string) => setValues(values=>({...values, password}))

    const submitHandle = async ()=>{
        const result = await apiCall(POST, endpoints().login,values)
        setValues({name : "", password : ""})
        if(result.access){
            await setJwtToken(result.token)    
            navigate()
        }
    }

    return (
        <View style={styles.container}>
            <Input value={values.name} placeholder="name" changeHandle={nameHandle}/>
            <Input value={values.password} type="password" placeholder="password" changeHandle={passwordHandle}/>
            <Button text="Login" handle={submitHandle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    }
})