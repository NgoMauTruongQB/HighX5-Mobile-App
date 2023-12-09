import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { event as EventRepository } from '../repositories'
import colors from '../constants/colors'

const EventDetail = (props) => {
    const [event, setEvent] = useState({})

    useEffect(() => {
        const eventId = props.route.params.eventId

        EventRepository.getEventDetail(eventId)
            .then((responseEvent) => {
                setEvent(responseEvent.queryResult)
            })
            .catch((error) => {
                throw error
            })
    })
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: `${event.image}` }} style={styles.image}  />
            <Text style={styles.name}>{event.name}</Text>
            <Text style={styles.description}>{event.description}</Text>
        </ScrollView>
    )
}

export default EventDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%'
    },
    image: {
        width: '100%',
        height: 250,
        backgroundColor: colors.white
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        margin: 10,
    },
    description: {
        textAlign: 'justify',
        marginHorizontal: 10,
        fontSize: 16,
    }

    
})
