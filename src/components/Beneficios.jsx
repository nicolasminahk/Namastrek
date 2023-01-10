import { ListItem } from '@rneui/base'
import React from 'react'
import { ScrollView } from 'react-native'

const cupones = [
    {
        id: '1',
        titulo: 'Raki!',
        descripcion: '25% off en las actividades',
        valido: 'Valido hasta 23/04',
    },
    {
        id: '2',
        titulo: 'Ropa',
        descripcion: '10% off en todas las prendas',
        valido: 'Valido hasta 25/04',
    },
    {
        id: '3',
        titulo: 'Bicicleteria',
        descripcion: '23% off en ruedas',
        valido: 'Valido hasta 02/05',
    },
]

const Beneficios = () => {
    return (
        <ScrollView style={{ flexDirection: 'column', alignContent: 'center' }}>
            {cupones.map((cupon) => {
                return (
                    <ListItem key={cupon.id}>
                        <ListItem.Chevron />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'green' }}> {cupon.titulo} </ListItem.Title>
                            <ListItem.Subtitle> {cupon.descripcion}</ListItem.Subtitle>
                            <ListItem.Subtitle> {cupon.valido}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
            })}
        </ScrollView>
    )
}

export default Beneficios
