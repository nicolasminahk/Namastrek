import { NavigationContainer } from '@react-navigation/native'
import Main from './src/components/Main'
import Salidas from './src/components/Salidas'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createNativeStackNavigator()

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={Main} />
            <HomeStackNavigator.Screen name="salidas" component={Salidas} />
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: 'inicio',
                    tabBarIcon: ({ color, size }) => <AntDesign name="home" size={24} color="green" />,
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