import { ListItem } from '@rneui/base'
import React from 'react'
import { ScrollView } from 'react-native'

const Beneficios = () => {
    return (
        <ScrollView style={{ flexDirection: 'column', alignContent: 'center' }}>
            <ListItem>
                <ListItem.Chevron />
                <ListItem.Content>
                    <ListItem.Title> Beneficio </ListItem.Title>
                    <ListItem.Subtitle> 25% en Raki</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </ScrollView>
    )
}

export default Beneficios
