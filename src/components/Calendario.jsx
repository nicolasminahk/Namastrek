import { Card, ListItem } from '@rneui/base'
import React, { useState } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import salidas from '../../data/salidas'
import StyledText from './StyleText'

const Calendario = () => {
    const [fechaCalendar, setFecha] = useState('')
    const date = new Date()
    let [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()]
    day = `0${day}`
    month = `0${month}`
    const fecha = `${month}-${day}-${year}`

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Calendar
                style={{ height: '100%', borderRadius: 10, elevation: 4, margin: 40 }}
                onDayPress={(dia) => setFecha(dia.dateString)}
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

            {salidas.map((salida) => {
                if (salida.fecha === fechaCalendar) {
                    return (
                        <View>
                            <TouchableOpacity>
                                <ListItem key={salida.id}>
                                    <ListItem.Chevron />
                                    <ListItem.Content>
                                        <ListItem.Title> {salida.title} </ListItem.Title>
                                        <ListItem.Subtitle> {salida.description}</ListItem.Subtitle>
                                        <ListItem.Subtitle> {salida.precio}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
                        </View>
                    )
                } else {
                    return <StyledText>NO</StyledText>
                }
            })}
        </View>
    )
}

export default Calendario
