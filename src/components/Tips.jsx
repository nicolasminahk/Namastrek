import React from 'react'
import { ScrollView, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { gql, useQuery } from '@apollo/client'

const ALL_TIPS = gql`
    query Tips {
        allTips {
            id
            name
            description
        }
    }
`

const Tips = () => {
    const { loading, error, data } = useQuery(ALL_TIPS)
    // console.log(data)
    if (loading) return <Text>Loading</Text>
    if (error) return <Text>{error}</Text>
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
                        </Card>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Tips
