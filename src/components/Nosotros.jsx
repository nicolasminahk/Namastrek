import React from 'react'
import { ScrollView, Image, StyleSheet, View } from 'react-native'
import StyledText from './StyleText'
import img from '../../assets/namastrek.jpeg'

const Nosotros = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <ScrollView style={style.container}>
                <Image style={style.image} source={img}></Image>
            </ScrollView>
            <View style={{ alignItems: 'center', paddingTop: 40, justifyContent: 'center', alignContent: 'center' }}>
                <StyledText style={style.textTitle}>NAMASTREK</StyledText>
                <StyledText>Acompañanos en esta aventura! </StyledText>
                <StyledText>{`-Trekking -Viajes~ -Senderismo`} </StyledText>
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
        width: 200,
        height: 200,
        borderRadius: 30,
        paddingBottom: 20,
    },
    textTitle: {
        fontWeight: 'bold',
    },
})

export default Nosotros
