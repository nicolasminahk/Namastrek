import React from 'react'
import { ScrollView, Image, StyleSheet, View, Linking, Text, TouchableOpacity } from 'react-native'
import StyledText from './StyleText'
import img from '../../assets/namastrek.png'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Nosotros = () => {
    const handleWhatsApp = async () => {
        await Linking.openURL('https://wa.me/+543814012014?text=Hola!')
    }
    const handleInstagram = async () => {
        await Linking.openURL('https://www.instagram.com/namastrek/')
    }
    const handleWeb = async () => {
        await Linking.openURL('https://namastrek.com.ar/#!/-principal/')
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <ScrollView style={style.container}>
                <Image style={style.image} source={img}></Image>
            </ScrollView>
            <View style={{ alignItems: 'center', paddingTop: 40, justifyContent: 'center', alignContent: 'center' }}>
                <StyledText style={style.textTitle}>NAMASTREK</StyledText>
                <StyledText style={{ fontWeight: '500' }}>Camina besando la tierra con tus pies </StyledText>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={handleWhatsApp} style={style.icon}>
                    <FontAwesome name="whatsapp" size={40} color="green" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleInstagram} style={style.icon}>
                    <AntDesign name="instagram" size={40} color="green" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleWeb} style={style.icon}>
                    <MaterialCommunityIcons name="web" size={40} color="green" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 30,
        paddingTop: 30,
    },
    image: {
        width: 320,
        height: 200,
        borderRadius: 30,
        paddingBottom: 20,
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 20,
        marginBottom: 30,
    },
    icon: {
        justifyContent: 'flex-end',
        padding: 20,
    },
})

export default Nosotros
