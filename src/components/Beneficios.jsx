import { ListItem } from '@rneui/base'
import React from 'react'
import { Button, ScrollView, Text } from 'react-native'
import { gql, useQuery } from '@apollo/client'

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

const Beneficios = () => {
    const { loading, error, data } = useQuery(ALL_BENEFICIOS)
    // console.log(data.allBeneficios)
    if (loading) return <Text>Loading</Text>
    if (error) return <Text>{error}</Text>
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
        </ScrollView>
    )
}

export default Beneficios
