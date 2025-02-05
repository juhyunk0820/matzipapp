import MapHomeScreen from "@/screens/MapHomeScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react"
import { View } from "react-native"

function MainDrawerNavigator() {
    const Drawer = createDrawerNavigator()
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="MapHome" component={MapHomeScreen}/>
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator