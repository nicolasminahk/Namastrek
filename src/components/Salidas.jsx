import React from 'react'
import { Text, FlatList } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import Item from './Item'

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

const Salidas = () => {
    const { loading, error, data } = useQuery(ALL_SALIDAS)
    console.log(data)

    if (loading) return <Text>Loading</Text>
    if (error) return <Text>{error}</Text>
    return (
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
    )
}

// If user es Admin, renderizar el modal para cargar salidas
// Generar un modal para agregar salidas con los campos requeridos:
// Name, description, price, date, image, duration.

export default Salidas
