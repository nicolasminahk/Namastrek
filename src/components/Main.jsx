import React from 'react'
import { View, Text } from 'react-native'
import Salidas from './Salidas.jsx'
import { Constants } from 'expo-constants'
import AppBar from './AppBar.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="salidas" component={Salidas} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
export default Main
