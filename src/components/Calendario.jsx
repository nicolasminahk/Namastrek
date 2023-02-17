import { Card, ListItem } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity, View, Text } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import salidas from '../../data/salidas'
import StyledText from './StyleText'

const Calendario = () => {
    const [fechaCalendar, setFecha] = useState('')
    const [fechaSalidas, setSalida] = useState('')
    LocaleConfig.locales['Es'] = {
        monthNames: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ],
        monthNamesShort: [
            'Ene.',
            'Feb.',
            'Mar.',
            'Abr.',
            'Mayo',
            'Junio',
            'Julio',
            'Agos.',
            'Sept.',
            'Oct.',
            'Nov.',
            'Dic.',
        ],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
        today: 'Hoy',
    }
    LocaleConfig.defaultLocale = 'Es'

    const date = new Date()
    let [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()]
    day = `0${day}`
    month = `0${month}`
    const fecha = `${month}/${day}/${year}`

    console.log(fechaCalendar.split('-').toString(), salidas[2].fecha.split('/').reverse().toString())

    const vacation = { key: 'vacation', color: 'red', dotColor: 'red' }
    const massage = { key: 'massage', color: 'green', markedDotColor: 'green' }
    return (
        <View style={{ paddingTop: 50, flex: 1 }}>
            <Calendar
                onDayPress={(dia) => setFecha(dia.dateString)}
                markingType={'custom'}
                markedDates={{
                    '2022-12-25': {
                        customStyles: {
                            container: { backgroundColor: 'black', elevation: 2 },
                            text: { color: 'white' },
                        },
                    },
                    '2023-01-22': {
                        marked: true,
                        dotColor: 'green',
                        activeOpacity: 0,
                    },
                    '2023-02-20': {
                        marked: true,
                        dotColor: 'red',
                        activeOpacity: 0,
                        // onDayPress: () => {
                        //     Alert.alert('suspendida')
                        // },
                    },
                    '2023-01-13': { dots: [vacation, massage], marked: true, selectedColor: 'green' },
                }}
                // Initially visible month. Default = Date()
                // current={'2023-01-03'}
                // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={'2012-05-10'}
                // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // maxDate={'2023-12-31'}
                // // Handler which gets executed on day press. Default = undefined
                // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                // monthFormat={'yyyy MM'}
                // // Handler which gets executed when visible month changes in calendar. Default = undefined
                // onMonthChange={(month) => {
                //     console.log('month changed', month)
                // }}
                // Hide month navigation arrows. Default = false
                //hideArrows={true}
                // Do not show days of other months in month page. Default = false
                //hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
            />
            <View>
                {salidas.map((salida) => {
                    if (salida.fecha === fechaCalendar.split('-').toString()) {
                        return (
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <TouchableOpacity>
                                    <StyledText>{salida.title}</StyledText>
                                    {/* <ListItem key={salida.id}>
                                    <ListItem.Content>
                                        <ListItem.Title> {salida.title} </ListItem.Title>
                                        <ListItem.Subtitle> {salida.description}</ListItem.Subtitle>
                                        <ListItem.Subtitle> {salida.precio}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem> */}
                                </TouchableOpacity>
                            </View>
                        )
                    } else {
                        return ''
                    }
                })}
            </View>
        </View>
    )
}

export default Calendario
