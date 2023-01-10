import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import StyledText from './StyleText'
import { LinearGradient } from 'expo-linear-gradient'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase-config'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Alert.alert('Se creó!')
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message

                Alert.alert(error.message)
                throw error
            })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Alert('SignIn!')
                const user = userCredential.user
            })
            .catch((error) => {
                Alert(error)
            })
    }

    return (
        <View style={style.container}>
            <StyledText style={style.titulo}>Hola!</StyledText>
            <Text style={style.subTitle}>Inicia sesión</Text>
            <TextInput onChange={(text) => setEmail(text)} style={style.textInput} placeholder="email" />
            <TextInput
                onChange={(text) => setPassword(text)}
                style={style.textInput}
                placeholder="password"
                secureTextEntry={true}
            />
            <StatusBar style="auto" />
            <TouchableOpacity onPress={handleSignIn}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#16d638', '#1ef0f2']}
                    style={style.button}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10 }}>LOG IN</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#16d638', '#1ef0f2']}
                    style={style.button}
                >
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
})

export default Login
