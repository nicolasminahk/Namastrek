import { NavigationContainer } from '@react-navigation/native'
import Main from './src/components/Main'
import Salidas from './src/components/Salidas'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome5 } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import Beneficios from './src/components/Beneficios'
import Nosotros from './src/components/Nosotros'
import Form from './src/components/Form'
import Login from './src/components/Login'
import Tips from './src/components/Tips'
import Register from './src/components/Register'

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createNativeStackNavigator()

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="Login">
            <HomeStackNavigator.Screen name="Inicio" component={Main} />
            <HomeStackNavigator.Screen name="salidas" component={Salidas} />
            <HomeStackNavigator.Screen name="nosotros" component={Nosotros} />
            <HomeStackNavigator.Screen name="form" component={Form} />
            <HomeStackNavigator.Screen name="Login" component={Login} />
            <HomeStackNavigator.Screen name="Register" component={Register} />
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: 'inicio',
                    tabBarIcon: ({ color, size }) => <Fontisto name="date" size={24} color="green" />,
                    headerShown: false, //Esto para que no se muestre el "home" arriba
                }}
            />

            <Tab.Screen
                name="Salidas"
                component={Salidas}
                options={{
                    tabBarLabel: 'Salidas',
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="walking" size={24} color="green" />,
                }}
            />
            <Tab.Screen
                name="Beneficios"
                component={Beneficios}
                options={{
                    tabBarLabel: 'Beneficios',
                    tabBarIcon: ({ color, size }) => <Foundation name="ticket" size={24} color="green" />,
                }}
            />
            <Tab.Screen
                name="Tips"
                component={Tips}
                options={{
                    tabBarLabel: 'Tips',
                    tabBarIcon: ({ color, size }) => <Entypo name="light-bulb" size={24} color="green" />,
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

//TabBarBadge ----> Para cuando queremos mostrar una notificación sobre el ícono, o algo nuevo
