import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        // paddingTop: Constants.statusBarHeigth + 10,
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
    },
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight="bold" style={styles.text}>
                Salidas
            </StyledText>
        </View>
    )
}

export default AppBar
