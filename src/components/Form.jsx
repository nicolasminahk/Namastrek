import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'

const Form = () => {
    const [text, onChangeText] = useState('')
    const [number, onChangeNumber] = useState(null)
    const [alerg, onChangeAlerg] = useState('')

    return (
        <SafeAreaView>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Nombre Completo'} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Tipo de Sangre"
                //keyboardType="numeric"
            />
            <TextInput style={styles.input} onChangeText={onChangeAlerg} value={alerg} placeholder={'Alergias'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
    },
})

export default Form
