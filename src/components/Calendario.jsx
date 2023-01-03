import React from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'

const Calendario = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Calendar
                style={{ height: '100%', borderRadius: 10, elevation: 4, margin: 40 }}
                markingType={'custom'}
                markedDates={{
                    '2022-12-25': {
                        customStyles: {
                            container: { backgroundColor: 'black', elevation: 2 },
                            text: { color: 'white' },
                        },
                    },
                }}
            />
        </View>
    )
}

export default Calendario
