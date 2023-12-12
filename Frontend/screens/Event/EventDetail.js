import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { event as EventRepository } from '../../repositories'
import formatDateTime from '../../utils/helpers/formatDate'
import icons from '../../constants/icons'
import colors from '../../constants/colors'

const EventDetail = (props) => {
    const [event, setEvent] = useState({})
    const [leader, setLeader] = useState({})

    useEffect(() => {
        const eventId = props.route.params.eventId

        EventRepository.getEventDetail(eventId)
            .then((responseEvent) => {
                setEvent(responseEvent.queryResult)
                setLeader(responseEvent.queryResult.User)
            })
            .catch((error) => {
                throw error
            })
    }, [])


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Image source={{ uri: event.image }} style={styles.image}/>
            <View style={styles.infor}>
                <Text style={styles.name}>{event.name}</Text>
                <Text style={styles.slogan}>{event.slogan}</Text>
                <Text style={{
                    backgroundColor: event.status == 0 ? colors.warning : event.status == 1 ? colors.success : colors.danger,
                    fontWeight: '700',
                    color: colors.white,
                    width: 90,
                    textAlign: 'center',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 16,
                    marginVertical: 10
                }}>
                    {event.status == 0 ? 'Upcoming' : event.status == 1 ? 'On going' : 'Completed'}
                </Text>
            </View>

            {/* Leader */}
            <Text style={styles.title}>Leader</Text>
            <View style={styles.item}>
                <View style={styles.leader}>
                    <Image source={{uri: leader.avatar}} style={styles.avatar}/>
                    <View>
                        <Text style={styles.textInfor}><Text style={styles.subTitle}>Name: </Text>{leader.name}</Text>
                        <Text style={styles.textInfor}><Text style={styles.subTitle}>Email: </Text>{leader.gmail}</Text>
                        <Text style={styles.textInfor}><Text style={styles.subTitle}>Phone: </Text>{leader.telephone}</Text>
                        <Text style={styles.textInfor}><Text style={styles.subTitle}>University: </Text>{leader.university}</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>Date</Text>
            <View style={styles.item}>
                <Text style={[styles.textInfor, {paddingHorizontal: 10, paddingBottom: 10}]}>{formatDateTime(event.date_start)} - {formatDateTime(event.date_end)}</Text>
            </View>

            <Text style={styles.title}>Location</Text>
            <View style={styles.item}>
                <Text style={[styles.textInfor, {paddingHorizontal: 10, paddingBottom: 10}]}>{event.location}</Text>
            </View>

            {/* Description */}
            <Text style={styles.title}>Description</Text>
            <View style={styles.item}>
                <Text style={[styles.textInfor, {paddingHorizontal: 10, paddingBottom: 10}]}>{event.description}</Text>
            </View>

            <View style={{height: 200}}></View>

        </ScrollView>
    )
}

export default EventDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
    },
    image: {
        width: '100%',
        height: 430
    },
    infor: {
        margin: 8
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        color: colors.accent
    },
    slogan: {
        fontSize: 20,
        color: colors.text,
        marginVertical: 2,
        fontWeight: '600'
    },
    icon: {
        height: 26,
        width: 26,
        tintColor: colors.text,
        marginRight: 4
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 8
    },
    item: {
        borderColor: colors.dark_gray,
        borderBottomWidth: 0.5,
        marginTop: 6,
        marginBottom: 10

    },
    leader: {
        padding: 10,
        paddingTop: 0,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 6,
        marginEnd: 20
    },
    subTitle: {
        fontWeight: '600'
    },
    textInfor: {
        color: colors.text,
        fontSize: 15,
        marginVertical: 2,
        textAlign: 'justify'
    }
})
