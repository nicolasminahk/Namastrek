import React from 'react'
import { ScrollView, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-paper'
import theme from '../theme'
import StyledText from './StyleText'

const Item = (props) => (
    <ScrollView style={style.container}>
        <View style={{ justifyContent: 'center', padding: 5 }}>
            <Card key={props.id}>
                <StyledText style={style.title}>{props.title}</StyledText>
                <View>
                    <Card.Content>
                        <StyledText fontWeight="bold">Description: </StyledText>
                        <StyledText color="secondary">{props.description}</StyledText>
                        <View>
                            <StyledText fontWeight="bold">Duración: </StyledText>
                            <StyledText>{props.duracion}</StyledText>
                        </View>
                        <View>
                            <StyledText fontWeight="bold" style={style.language}>
                                Precio:{' '}
                            </StyledText>
                            <StyledText>{props.precio}</StyledText>
                        </View>
                    </Card.Content>
                </View>
                <View>
                    <Card.Cover source={{ uri: props.image }} style={style.image}></Card.Cover>
                </View>
                <Card.Actions>
                    <Button>IR</Button>
                </Card.Actions>
            </Card>
        </View>
    </ScrollView>
)

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        paddingVertical: 5,

        //alignContent: 'center',
    },
    title: {
        paddingLeft: 10,
        padding: 4,
        fontStyle: 'black',
        fontSize: '30',
        fontWeight: 'bold',
        color: 'green',
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4,
    },
    image: {
        paddingLeft: 10,
        paddingTop: 10,
        width: 70,
        height: 70,
        borderRadius: 4,
        alignContent: 'center',
    },
})

export default Item

//Flex 1 ----> Ocupa todo le espacio y que haga un salto de linea en caso de que sobre

// IMAGENES ---> se utiliza Image y source, al cual se le pasa una uri dentro de un objeto

// const RepositoryItemsHeader = ({ title, image, description, duracion, precio }) => (
//     <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
//         <View style={{ paddingRight: 10 }}>
//             <Image style={style.image} source={{ uri: image }} />
//         </View>
//         <View>
//             <StyledText fontWeight="bold">Description: </StyledText>
//             <StyledText color="secondary">{description}</StyledText>

//             <View>
//                 <StyledText fontWeight="bold">Duración: </StyledText>
//                 <StyledText>{duracion}</StyledText>
//             </View>
//             <View>
//                 <StyledText fontWeight="bold" style={style.language}>
//                     Precio:{' '}
//                 </StyledText>
//                 <StyledText>{precio}</StyledText>
//             </View>
//         </View>
//     </View>
// )

// const ItemsStats = (props) => {
//     return (
//         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//             <RepositoryItemsHeader {...props} />
//         </View>
//     )
// }
