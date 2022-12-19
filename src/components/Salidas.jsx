import React from 'react'
import { View, Text, FlatList } from 'react-native'
import salidas from '../../data/salidas'
import Item from './Item'

const Salidas = () => {
    return (
        <FlatList
            data={salidas}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: salida }) => <Item {...salida} />}
        />
    )
}
export default Salidas
