import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const Form = () => {
    const [text, onChangeText] = useState('')
    const [number, onChangeNumber] = useState(null)
    const [alerg, onChangeAlerg] = useState('')

    return (
        <SafeAreaView>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Nombre Completo'} />
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Domicilio '} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'Telefono de contacto'}
            />
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Profesion '} />
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Obra Social '} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeAlerg}
                value={alerg}
                placeholder={'Alergias a Medicamentos'}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeAlerg}
                value={alerg}
                placeholder={'Alergias a Alimentos'}
            />
            <View style={styles.input}>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={'Tipo de Sangre'}
                    items={[
                        { label: 'A+', value: 'A+' },
                        { label: 'A-', value: 'A-' },
                        { label: 'B+', value: 'B+' },
                        { label: 'B-', value: 'B-' },
                        { label: 'AB+', value: 'AB+' },
                        { label: 'AB-', value: 'AB-' },
                        { label: '0+', value: '0+' },
                        { label: '0-', value: '0-' },
                    ]}
                />
            </View>
            <View>
                <Button title="Guardar" />
            </View>
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
