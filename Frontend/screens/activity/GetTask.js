import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { activity as ActivityRepository} from '../../repositories'
import colors from '../../constants/colors'
import formatDateTime from '../../utils/helpers/formatDate'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

export default function GetTask({route}) {
    const [task, setTask] = useState({})

    useEffect(() => {
        ActivityRepository.getTaskEventJoined(1, event_id = 1)
            .then((res) => {
                setTask(res.rows)
            })
            .catch((error) => {
                throw error
            })
    }, [])

    const navigation = useNavigation()
    const handleCreateTask = () => {
        console.log('create')
        // navigation.navigate('EventDetail', { eventId: task.Event.id, eventName: task.Event.name, userId: 1 })
    }

    const handleAccept = () => {
        console.log('accept')
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.containerItem}>
                <Image style={styles.itemImage} source={{uri: item.Event.image}} />
                <View>
                    <Text style={styles.title}>{item.Event.name}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <Text style={styles.date}>Deadline: {moment(item.date_end).format('DD MMMM YYYY')}</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity 
                            style={[styles.btn, {backgroundColor: colors.success, marginEnd: 10}]}
                            onPress={handleAccept}
                        >
                            <Text style={styles.textBtn}>Accept Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={handleCreateTask}>
                            <Text style={styles.textBtn}>Create task</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={task}
                renderItem={renderItem}
                keyExtractor={(eachNotification) => eachNotification.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10
    },

    containerItem: {
        width: '100%',
        borderWidth: 0.4,
        borderColor: colors.dark_gray,
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginEnd: 10
    },
    title: {
        color: colors.accent,
        fontWeight: '600',
        fontSize: 17
    },
    content: {
        color: colors.text,
        fontSize: 18,
        marginVertical: 4
    },
    btn: {
        backgroundColor: colors.primary,
        width: 100,
        padding: 7,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn : {
        color: colors.white
    }
})