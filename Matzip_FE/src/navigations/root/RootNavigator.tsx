import React from "react"
import MainDrawerNavigator from "../drawer/MainDrawerNavigator"
import AuthStackNavigator from "../stack/AuthStackNavigator"

function RootNavigator() {
    const isLogin = true

    return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>
}

export default RootNavigator