import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Salidas from './Salidas.jsx'
import { Constants } from 'expo-constants'
import AppBar from './AppBar.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import Calendario from './Calendario.jsx'
//const Stack = createNativeStackNavigator()

const Main = () => {
    const navigate = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Calendario />
            <TouchableOpacity
                onPress={() => navigate.navigate('salidas')}
                style={{
                    backgroundColor: 'green',
                    padding: 10,
                    marginTop: '20%',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 10,
                }}
            >
                <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Ir al perfil</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Main

{
    /* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="salidas" component={Salidas} />
                </Stack.Navigator>
            </NavigationContainer>  */
}
