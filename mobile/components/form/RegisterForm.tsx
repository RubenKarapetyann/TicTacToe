import { StyleSheet, View } from "react-native"
import Input from "../global/Input"
import { useState } from "react"
import Button from "../global/Button"
import { apiCall } from "../../utils/api/api"
import endpoints from "../../utils/api/endpoints"
import { POST } from "../../constants/api/api-constants"
import { Navigation } from "../../types/navigation/global"
import { AuthResponseType } from "../../types/api/auth"
import PALETTE from "../../constants/styles/palette-constants"
import { ErrorsType } from "../../types/components/errors"

export default function RegisterForm({ navigate }: Navigation){
    const [ values, setValues ] = useState({
        name : "",
        password : "",
        repeatPassword : ""
    })
    const [errors, setErrors] = useState<ErrorsType>({
        name : null,
        password : null,
        repeatPassword : null
    })

    const nameHandle = (name: string) => setValues(values=>({...values, name}))
    const passwordHandle = (password: string) => setValues(values=>({...values, password}))
    const repeatPasswordHandle = (password: string) => setValues(values=>({...values, repeatPassword: password}))

    const submitHandle = async ()=>{

        if(values.name.length <= 0){
            return setErrors(errors=>({...errors, name : "username is incorrect"}))
        }
        if(values.password.length <= 8){
            setValues(values=>({...values, password : "", repeatPassword : ""}))
            return setErrors(errors=>({...errors, password : "minimum number of characters: 8"}))
        }
        if(values.password !== values.repeatPassword){
            setValues(values=>({...values, password : "", repeatPassword : ""}))
            return setErrors(errors=>({...errors, repeatPassword : "password mismatch"}))
        }

        const result: AuthResponseType = await apiCall(POST, endpoints().reg, {
            name : values.name,
            password : values.password
        })
        setValues({name : "", repeatPassword : "", password : ""})
        if(result.access){
            navigate()
        }else{            
            setErrors(errors=>{
                if(!result.error){
                    return {name : null, password : null, repeatPassword : null}
                }
                const error: string = result.error
                return {
                    ...errors,
                    [error] : result.message
                }
            })
        }
    }

    return (
        <View style={styles.container}>
            <Input 
                value={values.name} 
                placeholder={errors.name || "name"} 
                changeHandle={nameHandle}
                color={errors.name ? PALETTE.primary : PALETTE.border}
            />
            <Input 
                value={values.password} 
                type="password" 
                placeholder={errors.password || "password"} 
                changeHandle={passwordHandle}
                color={errors.password ? PALETTE.primary : PALETTE.border}
            />
            <Input 
                value={values.repeatPassword} 
                type="password" 
                placeholder={errors.repeatPassword || "repeat password"} 
                changeHandle={repeatPasswordHandle}
                color={errors.repeatPassword ? PALETTE.primary : PALETTE.border}
            />
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