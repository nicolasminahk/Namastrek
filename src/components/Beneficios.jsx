import { ListItem } from '@rneui/base'
import React, { useState } from 'react'
import { Button, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { gql, useQuery, useMutation } from '@apollo/client'

const ALL_BENEFICIOS = gql`
    query Beneficios {
        allBeneficios {
            id
            name
            description
            date
        }
    }
`
const ADD_BENEFICIO = gql`
    mutation Mutation($name: String!, $description: String!, $date: String!) {
        addBeneficios(name: $name, description: $description, date: $date) {
            date
            description
            id
            name
        }
    }
`

const Beneficios = () => {
    const { loading, error, data, refetch } = useQuery(ALL_BENEFICIOS, { pollInterval: 500 })
    console.log(data)
    //Poll interval realiza nuevamente la consulta cada cierto tiempo, esto puede empeorar el rendimiento?
    // if (loading) return <Text>Loading</Text>
    // if (error) return <Text>{error}</Text>
    //

    const [formState, setFormState] = useState({
        name: '',
        description: '',
        date: new Date().toLocaleDateString(),
    })

    const [createBeneficio] = useMutation(ADD_BENEFICIO, {
        variables: {
            name: formState.name,
            description: formState.description,
            date: new Date().toLocaleDateString(),
        },
    })

    return (
        <ScrollView style={{ flexDirection: 'column', alignContent: 'center' }}>
            {data.allBeneficios.map((beneficio) => {
                return (
                    <>
                        <ListItem key={beneficio.id}>
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title style={{ color: 'green' }}> {beneficio.name} </ListItem.Title>
                                <ListItem.Subtitle> {beneficio.description}</ListItem.Subtitle>
                                <ListItem.Title> </ListItem.Title>
                                <ListItem.Subtitle>Valido hasta: {beneficio.date}</ListItem.Subtitle>
                            </ListItem.Content>
                            <Button title="Recibir" />
                        </ListItem>
                    </>
                )
            })}
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 10 }}>
                <Text style={{ fontSize: '20rem' }}>Nuevo Beneficio</Text>
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
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress={(e) => {
                        e.preventDefault()
                        createBeneficio()
                        refetch(ALL_BENEFICIOS)
                        setFormState({
                            name: '',
                            description: '',
                            date: '',
                        })
                    }}
                >
                    <Text>Subir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Beneficios

//If user is admin, view modal from new beneficio, con los campos required:
//name, description, date
