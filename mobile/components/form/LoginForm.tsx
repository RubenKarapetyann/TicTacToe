import { StyleSheet, View } from "react-native"
import Input from "../global/Input"
import { useState } from "react"
import Button from "../global/Button"
import { apiCall } from "../../utils/api/api"
import endpoints from "../../utils/api/endpoints"
import { POST } from "../../constants/api/api-constants"
import { setJwtToken } from "../../utils/storage/jwt"
import { Navigation } from "../../types/navigation/RootStackTypes"
import PALETTE from "../../constants/styles/palette-constants"
import { AuthResponseType } from "../../types/api/auth"

export default function LoginForm({ navigate }: Navigation){
    const [ values, setValues ] = useState({
        name : "",
        password : ""
    })
    const [errors, setErrors] = useState({
        name : null,
        password : null
    })

    const nameHandle = (name: string) => {
        setValues(values=>({...values, name}))
        setErrors(errors=>({...errors, name : null}))
    }
    const passwordHandle = (password: string) => {
        setValues(values=>({...values, password}))
        setErrors(errors=>({...errors, password : null}))
    }

    const submitHandle = async ()=>{
        const result: AuthResponseType = await apiCall(POST, endpoints().login, values)
        setValues({name : "", password : ""})
        if(result.access && result.token){
            await setJwtToken(result.token)    
            navigate()
        }else{
            setErrors(errors=>{
                if(!result.error){
                    return {name : null, password : null}
                }
                const error: string = result.error
                return {...errors, [error] : result.message}
            })
        }
    }    

    return (
        <View style={styles.container}>
            <Input 
                value={values.name} 
                placeholder={errors.name ? errors.name : "name"} 
                changeHandle={nameHandle} 
                color={errors.name ? PALETTE.primary : PALETTE.border}
            />
            <Input 
                value={values.password} 
                type="password" 
                placeholder={errors.password ? errors.password : "password"} 
                changeHandle={passwordHandle} 
                color={errors.password ? PALETTE.primary : PALETTE.border}
            />
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