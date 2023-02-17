import React, { useState } from 'react'
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { gql, useQuery, useMutation } from '@apollo/client'

const ALL_TIPS = gql`
    query Tips {
        allTips {
            id
            name
            description
        }
    }
`
const ADD_TIP = gql`
    mutation Mutation($name: String!, $description: String!) {
        addTips(name: $name, description: $description) {
            description
            id
            name
        }
    }
`

const DELETE_TIP = gql`
    mutation Mutation($name: String!) {
        deleteTips(name: $name) {
            name
        }
    }
`

const Tips = () => {
    const { loading, error, data, refetch } = useQuery(ALL_TIPS, { pollInterval: 500 })
    console.log(data)
    // if (loading) return <Text>Loading</Text>
    // if (error) return <Text>{error}</Text>
    const [deleteTips, setDeleteTips] = useState('')
    console.log(deleteTips)
    const [formState, setFormState] = useState({
        name: '',
        description: '',
    })

    const [createTip] = useMutation(ADD_TIP, {
        variables: {
            name: formState.name,
            description: formState.description,
        },
    })

    const [deleteTip] = useMutation(DELETE_TIP, {
        variables: {
            name: deleteTips,
        },
    })
    return (
        <ScrollView>
            {data.allTips.map((tip) => {
                return (
                    <View style={{ paddingBottom: 20, paddingTop: 10 }} key={tip.id}>
                        <Card key={tip.id}>
                            <Card.Title title={tip.name} titleStyle={{ color: 'green' }} subtitle="Tener en cuenta" />
                            <Card.Content>
                                {/* <Text variant="titleLarge">Card title</Text> */}
                                <Text variant="bodyMedium">{tip.description}</Text>
                            </Card.Content>
                            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                            <Card.Actions>{/* <Button>Ok</Button> */}</Card.Actions>
                            <TouchableOpacity onPress={setDeleteTips(tip.name)}>
                                <Text>Eliminar</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                )
            })}
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 10 }}>
                <Text style={{ fontSize: '20rem' }}>Nuevo Tip</Text>
                <TextInput
                    value={formState.name}
                    style={{ backgroundColor: 'f1f1f1', borderRadius: 10, margin: 5 }}
                    placeholder="Nombre"
                    onChangeText={(e) => {
                        setFormState({
                            ...formState,
                            name: e,
                        })
                        console.log('target', e)
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
                        createTip()
                        refetch(ALL_TIPS)
                        setFormState({
                            name: '',
                            description: '',
                        })
                    }}
                >
                    <Text>Subir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Tips

//If el user es Admin, que figure el modal para cargar nuevos tipos con los campos requeridos:
//Name y description
// {
//     user.admin && {}
// }
