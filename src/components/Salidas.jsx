import React from 'react'
import { Text, FlatList } from 'react-native'
// import salidas from '../../data/salidas'
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
    // console.log(data)

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

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//         <Text style={[styles.title, textColor]}>{item.title}</Text>
//         <Image style={styles.image} source={{ uri: item.image }} />
//     </TouchableOpacity>
// )

// const Salidas = () => {
//     const [selectedId, setSelectedId] = useState(null)

//     const renderItem = ({ item }) => {
//         const backgroundColor = item.id === selectedId ? '#c2ffdb' : '#b8ec91'
//         const color = item.id === selectedId ? 'white' : 'black'
//         return (
//             <Item
//                 item={item}
//                 onPress={() => setSelectedId(salidas.id)}
//                 backgroundColor={{ backgroundColor }}
//                 textColor={{ color }}
//             />
//         )
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={salidas}
//                 renderItem={renderItem}
//                 keyExtractor={(salidas) => salidas.id}
//                 extraData={selectedId}
//             />
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         borderRadius: 30,
//     },
//     title: {
//         fontSize: 16,
//     },
//     image: {
//         width: 58,
//         height: 58,
//         borderRadius: 4,
//     },
// })

export default Salidas
