import { StyleSheet, View } from "react-native"
import Input from "../global/Input"
import { useState } from "react"
import Button from "../global/Button"

export default function LoginForm(){
    const [ values, setValues ] = useState({
        name : "",
        password : ""
    })

    const nameHandle = (name: string) => setValues(values=>({...values, name}))
    const passwordHandle = (password: string) => setValues(values=>({...values, password}))

    const submitHandle = ()=>{
        console.log(values);
    }

    return (
        <View style={styles.container}>
            <Input value={values.name} placeholder="name" changeHandle={nameHandle}/>
            <Input value={values.password} placeholder="password" changeHandle={passwordHandle}/>
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