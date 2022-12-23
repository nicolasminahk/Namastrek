import React from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'

const Calendario = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Calendar
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
