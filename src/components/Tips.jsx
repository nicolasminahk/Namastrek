// import { Button, Card, Text } from '@rneui/base'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const data = [
    {
        title: 'Beber agua',
        id: 1,
        description: 'Sí, tenes que beber agua ',
    },
    {
        title: 'Comer Liviano',
        id: 2,
        description: 'Comer liviano es super importante para poder realizar las actividades',
    },
]

const Tips = () => {
    return (
        <ScrollView>
            {data.map((tip) => {
                return (
                    <View style={{ paddingBottom: 20, paddingTop: 10 }}>
                        <Card key={tip.id}>
                            <Card.Title title={tip.title} titleStyle={{ color: 'green' }} subtitle="Tener en cuenta" />
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
