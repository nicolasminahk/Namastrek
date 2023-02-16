import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import StyledText from './StyleText'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { gql, useQuery, useMutation } from '@apollo/client'

const LOGIN_USER = gql`
    mutation Mutation($loginInput: LoginInput) {
        loginUser(loginInput: $loginInput) {
            email
            password
            token
            username
        }
    }
`

const Login = ({ navigation }) => {
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
    }, [])

    // const [seePassword, setSeePassword] = useState(true)
    // const [checkValidEmail, setCheckValidEmail] = useState(false)

    const navigate = useNavigation()
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })
    // const handleCheckEmail = (text) => {
    //     let re = /\S+@\S+\.\S+/
    //     let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    //     setEmail(text)
    //     if (re.test(text) || regex.test(text)) {
    //         setCheckValidEmail(false)
    //     } else {
    //         setCheckValidEmail(true)
    //     }
    // }

    const checkPasswordValidity = (value) => {
        // const isNonWhiteSpace = /^\S*$/
        // if (!isNonWhiteSpace.test(value)) {
        //     return 'Password must not contain Whitespaces.'
        // }

        // const isContainsUppercase = /^(?=.*[A-Z]).*$/
        // if (!isContainsUppercase.test(value)) {
        //     return 'Password must have at least one Uppercase Character.'
        // }

        // const isContainsLowercase = /^(?=.*[a-z]).*$/
        // if (!isContainsLowercase.test(value)) {
        //     return 'Password must have at least one Lowercase Character.'
        // }

        // const isContainsNumber = /^(?=.*[0-9]).*$/
        // if (!isContainsNumber.test(value)) {
        //     return 'Password must contain at least one Digit.'
        // }

        // const isValidLength = /^.{8,16}$/
        // if (!isValidLength.test(value)) {
        //     return 'Password must be 8-16 Characters Long.'
        // }

        return null
    }
    // const [loginUser] = useMutation(LOGIN_USER, {
    //     async onCompleted({ signIn }) {
    //         const { token } = signIn
    //         try {
    //             await AsyncStorage.setItem('token', token)
    //             navigation.replace('Inicio')
    //         } catch (err) {
    //             console.log(err.message)
    //         }
    //     },
    // })

    const handleLogin = () => {
        const checkPassowrd = checkPasswordValidity(password)
        if (!checkPassowrd) {
            useMutation(LOGIN_USER, {
                variables: {
                    email: email.toLocaleLowerCase(),
                    password: password,
                },
            })
                .then((result) => {
                    if (result.status == 200) {
                        AsyncStorage.setItem('AccessToken', result.data.token)
                        navigation.replace('Inicio')
                    }
                    console.log(result)
                })
                .catch((err) => {
                    console.error(err)
                })
        } else {
            alert(checkPassowrd)
        }
    }

    return (
        <View style={style.container}>
            <StyledText style={style.titulo}>Hola!</StyledText>
            <Text style={style.subTitle}>Inicia sesión</Text>
            <TextInput
                style={style.textInput}
                placeholder="email"
                value={formState.email}
                onChangeText={(e) => {
                    setFormState({
                        ...formState,
                        email: e,
                    })
                    console.log('target', e)
                }}
            />
            <TextInput
                value={formState.password}
                style={style.textInput}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(e) => {
                    setFormState({
                        ...formState,
                        password: e,
                    })
                    console.log('target', e)
                }}
            />
            <StatusBar style="auto" />
            <TouchableOpacity
                onPress={(e) => {
                    e.preventDefault()
                    handleLogin()
                }}
            >
                <LinearGradient colors={['#16d638', '#1ef0f2']} style={style.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10 }}>LOG IN</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate.navigate('Register')}>
                <LinearGradient colors={['#16d638', '#1ef0f2']} style={style.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10 }}>CREAR CUENTA</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backGroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 80,
        color: '#34434D',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        color: 'green',
    },
    textInput: {
        paddingStart: 30,
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    button: {
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 50,
        marginTop: 30,
        borderRadius: 30,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 24,
    },
    textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
    },
})

export default Login
