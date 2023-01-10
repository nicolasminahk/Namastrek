import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Salidas from './Salidas.jsx'
import { Constants } from 'expo-constants'
import AppBar from './AppBar.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import Calendario from './Calendario.jsx'
import { Button } from '@rneui/base'
import Nosotros from './Nosotros.jsx'
//const Stack = createNativeStackNavigator()

const Main = () => {
    const navigate = useNavigation()
    return (
        <ScrollView style={{ flex: 1 }}>
            {/* <AppBar /> */}
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
                <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Lista de Salidas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate.navigate('form')}
                    style={{
                        backgroundColor: 'green',
                        padding: 10,
                        marginTop: '20%',
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Formulario</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={{ margin: 40, alignItems: 'baseline', flex: 1 }}>
                <Button
                    onPress={() => navigate.navigate('nosotros')}
                    title="Nosotros"
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 100,
                        paddingVertical: 5,
                    }}
                    containerStyle={{
                        width: 200,
                        height: 40,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                />
            </View>
        </ScrollView>
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
