import React, { useState } from 'react'
import { Text, FlatList, View, TextInput, TouchableOpacity } from 'react-native'
import { gql, useQuery, useMutation } from '@apollo/client'
import Item from './Item'
import DatePicker from 'react-native-datepicker'

const ALL_SALIDAS = gql`
    query AllSalidas {
        allSalidas {
            date
            description
            id
            name
            price
        }
    }
`
const ADD_SALIDA = gql`
    mutation Mutation($name: String!, $description: String!, $date: String!, $price: String!, $duration: String!) {
        addSalidas(name: $name, description: $description, date: $date, price: $price, duration: $duration) {
            date
            description
            duration
            id
            image
            name
            price
        }
    }
`

const Salidas = () => {
    const { loading, error, data } = useQuery(ALL_SALIDAS)

    if (loading) return <Text>Loading</Text>
    if (error) return <Text>{error}</Text>

    const [formState, setFormState] = useState({
        name: '',
        description: '',
        date: '',
        duration: '',
        image: '',
        price: '',
    })

    const [createSalida] = useMutation(ADD_SALIDA, {
        variables: {
            name: formState.name,
            description: formState.description,
            date: formState.date,
            duration: formState.duration,
            image: formState.image,
            price: formState.price,
        },
    })
    return (
        <>
            <FlatList
                data={data.allSalidas}
                ItemSeparatorComponent={() => <Text> </Text>}
                renderItem={({ item: salida }) => (
                    <Item
                        style={{ backgroundColor: 'f1f1f1', padding: 20, marginVertical: 8, marginHorizontal: 16 }}
                        {...salida}
                    />
                )}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 10 }}>
                <Text style={{ fontSize: '20rem' }}>Nueva Salida</Text>
                <TextInput
                    value={formState.name}
                    style={{ backgroundColor: 'f1f1f1', borderRadius: 10, margin: 5 }}
                    placeholder="Nombre"
                    onChangeText={(e) => {
                        setFormState({
                            ...formState,
                            name: e,
                        })
                    }}
                ></TextInput>
                <TextInput
                    value={formState.description}
                    onChangeText={(e) => {
                        setFormState({
                            ...formState,
                            description: e,
                        })
                        console.log('des', e)
                    }}
                    style={{ backgroundColor: 'f1f1f1', borderRadius: 10, margin: 5 }}
                    placeholder="Descripción"
                ></TextInput>

                <DatePicker />
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress={(e) => {
                        e.preventDefault()
                        createSalida()
                        refetch(ALL_SALIDAS)
                        // setFormState("")
                    }}
                >
                    <Text>Subir</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

// If user es Admin, renderizar el modal para cargar salidas
// Generar un modal para agregar salidas con los campos requeridos:
// Name, description, price, date, image, duration.

export default Salidas
