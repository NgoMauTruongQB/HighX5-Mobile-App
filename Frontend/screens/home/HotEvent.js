import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import colors from '../../constants/colors'
import { event as EventRepository } from '../../repositories'

export default function EventList() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        EventRepository.getEventsHome()
            .then(responseEvents => {
                setEvents(responseEvents)
            })
            .catch((error) => {
                console.error('Error loading events:', error)
            })
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    alert('Item click');
                }}
                style={styles.itemContainer}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Popular event</Text>
            </View>
            <FlatList
                data={events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: 5,
        paddingVertical: 10
    },
    header: {
        padding: 10,
        paddingBottom: 0,
    },
    text: {
        color: colors.accent,
        fontWeight: '700',
        fontSize: 22
    },
    itemContainer: {
        overflow: 'hidden',
        paddingVertical: 10
    },
    itemImage: {
        margin: 4,
        width: 290,
        height: 220,
        resizeMode: 'cover',
        borderColor: colors.dark_gray,
        borderWidth: 0.2,
        borderRadius: 8
    },
})