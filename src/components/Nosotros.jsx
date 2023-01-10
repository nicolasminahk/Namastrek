import React from 'react'
import { ScrollView, Image, StyleSheet, View, Linking, Text, TouchableOpacity } from 'react-native'
import StyledText from './StyleText'
import img from '../../assets/namastrek.png'
import { FontAwesome } from '@expo/vector-icons'

const Nosotros = () => {
    const handleWhatsApp = async () => {
        await Linking.openURL('https://wa.me/+543814012014?text=Hola!')
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
            <View>
                <TouchableOpacity onPress={handleWhatsApp}>
                    <FontAwesome name="whatsapp" size={24} color="green" />
                </TouchableOpacity>
                {/* <Text
                    style={{ marginTop: 30 }}
                    onPress={() => {
                        //Linking.openURL('http://api.whatsapp.com/send?text="Hola!"phone=3814012014')
                        Linking.openURL('whatsapp://send?text=' + 'Hola!' + '&phone=54' + '3814012014')
                    }}
                > */}
                {/* Send WhatsApp Message
                </Text> */}
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
})

export default Nosotros
