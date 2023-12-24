import { FunctionComponent } from "react";
import { GAME, LOGIN, MANU, REGISTER } from "../../constants/navigation/root-stack-constants";
import type { StackScreenProps } from "@react-navigation/stack"

export type RootStackParamList = {
    [MANU] : undefined;
    [GAME] : undefined;
    [LOGIN] : undefined;
    [REGISTER] : undefined
}

export type ManuProps = StackScreenProps<RootStackParamList, "Manu">
export type LoginProps = StackScreenProps<RootStackParamList, "Login">
export type RegisterProps = StackScreenProps<RootStackParamList, "Register">
export type GameProps = StackScreenProps<RootStackParamList, "Game">

export type Navigation = {
    navigate : ()=> void
}

export interface IStackScreens {
    [MANU] : FunctionComponent<any>,
    [GAME] : FunctionComponent<any>,
    [LOGIN] : FunctionComponent<any>,
    [REGISTER] : FunctionComponent<any>,
}