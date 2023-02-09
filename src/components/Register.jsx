import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import StyledText from './StyleText'
import { LinearGradient } from 'expo-linear-gradient'
import { useForm, Controller } from 'react-hook-form'

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })
    const onSubmit = (data) => console.log(data)

    return (
        <View style={style.container}>
            <StyledText style={style.titulo}>Crear cuenta</StyledText>
            <Text style={style.subTitle}>Completa los campos</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={style.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="name"
                    />
                )}
                name="name"
            />
            {errors.name && <Text>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={style.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="email"
                    />
                )}
                name="email"
            />
            {errors.email && <Text>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={style.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="password"
                        secureTextEntry={true}
                    />
                )}
                name="password"
            />
            {errors.password && <Text>This is required.</Text>}

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <LinearGradient colors={['#16d638', '#1ef0f2']} style={style.button}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10 }}>Guardar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// const Register = () => {
//     // const [email, setEmail] = useState('')
//     // const [password, setPassword] = useState('')
//     // const [name, setName] = useState('')

//     // return (
//     //     <View style={style.container}>
//     //         <StyledText style={style.titulo}>Crear cuenta</StyledText>
//     //         <Text style={style.subTitle}>Completa los campos</Text>
//     //         <TextInput onChange={(text) => setName(text)} style={style.textInput} placeholder="name" />
//     //         <TextInput onChange={(text) => setEmail(text)} style={style.textInput} placeholder="email" />
//     //         <TextInput
//     //             onChange={(text) => setPassword(text)}
//     //             style={style.textInput}
//     //             placeholder="password"
//     //             secureTextEntry={true}
//     //         />
//     //         <TouchableOpacity>
//     //             <LinearGradient colors={['#16d638', '#1ef0f2']} style={style.button}>
//     //                 <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10 }}>GUARDAR</Text>
//     //             </LinearGradient>
//     //         </TouchableOpacity>
//     //     </View>
//     // )
// }

const style = StyleSheet.create({
    container: {
        flex: 1,
        backGroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 50,
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
        width: '100%',
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
export default Register
