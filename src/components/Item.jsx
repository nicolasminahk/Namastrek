import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import theme from '../theme'
import StyledText from './StyleText'

//Parsear, reducir la descripción con una función previa
// IMAGENES ---> se utiliza Image y source, al cual se le pasa una uri dentro de un objeto

const RepositoryItemsHeader = ({ title, image, description, duracion, precio }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={style.image} source={{ uri: image }} />
        </View>
        <View>
            <StyledText fontWeight="bold">Description: </StyledText>
            <StyledText color="secondary">{description}</StyledText>

            <View>
                <StyledText fontWeight="bold">Duración: </StyledText>
                <StyledText>{duracion}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" style={style.language}>
                    Precio:{' '}
                </StyledText>
                <StyledText>{precio}</StyledText>
            </View>
        </View>
    </View>
)

const ItemsStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <RepositoryItemsHeader {...props} />
        </View>
    )
}

const Item = (props) => (
    <View key={props.id} style={style.container}>
        {/* <StyledText big bold>
            id :{props.id}
        </StyledText> */}
        <StyledText fontSize={'subheading'} fontWeight={'bold'}>
            {props.title}
        </StyledText>
        <ItemsStats {...props} />
    </View>
)

const style = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    language: {
        // padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        //alignSelf: "flex-start" para que el bloque ocupe solo el tamaño del texto y no todo el ancho
        //par que aparezca el border radius hay que acompañarlo de un overFlow
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4,
    },
    image: {
        width: 58,
        height: 58,
        borderRadius: 4,
    },
})

export default Item

//Al componente StyledText lo creo yo, que renderiza un text distinto según la prop que llegue

//Flex 1 ----> Ocupa todo le espacio y que haga un salto de linea en caso de que sobre

{
    /* <ListItem bottomDivider>
<Avatar source={{ uri: image }} />
<ListItem.Chevron />
<ListItem.Content>
    <ListItem.Title>{title}</ListItem.Title>
    <ListItem.Subtitle>{description}</ListItem.Subtitle>
    <ListItem.Subtitle>{duracion}</ListItem.Subtitle>
    <ListItem.Subtitle>{precio}</ListItem.Subtitle>
</ListItem.Content>
</ListItem> */
}
