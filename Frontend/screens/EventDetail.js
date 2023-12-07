import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { event as EventRepository } from '../repositories'

const EventDetail = (props) => {
    const [event, setEvent] = useState({})

    useEffect(() => {
        EventRepository.getEventDetail(props.id)
            .then((responseEvent) => {
                setEvent(responseEvent)
            })
            .catch((error) => {
                throw error
            })
    })
    return (
        <View style={styles.container}>
            {/* <Image source={require('')}  /> */}
        </View>
    )
}

export default EventDetail;

const styles = StyleSheet.create({
    container: {

    }
})
