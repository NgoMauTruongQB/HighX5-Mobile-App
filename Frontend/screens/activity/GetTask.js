import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { activity as ActivityRepository} from '../../repositories'
import colors from '../../constants/colors'
import formatDateTime from '../../utils/helpers/formatDate'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import icons from '../../constants/icons'
import { startSpinner, stopSpinner } from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'

export default function GetTask({route}) {
    const [task, setTask] = useState({})
    const {userId, event, leaderId} = route.params
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        startSpinner()
        ActivityRepository.getTaskEventJoined(2, event.id)
            .then((res) => {
                setTask(res.rows)
                console.log(res)
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                stopSpinner()
                setLoading(false)
            })
    }, [])

    const navigation = useNavigation()
    const handleCreateTask = () => {
        navigation.navigate('CreateTask', {event : event, userId : userId, leaderId : leaderId})
    }

    const handleAccept = () => {
        ActivityRepository.acceptTask(0, task.id, userId)
        navigation.navigate('MyTasks', {userId})
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
                    </View>
                </View>
            </View>
        )
    }

    if(loading) {
        return(
            <Loading/>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={task}
                renderItem={renderItem}
                keyExtractor={(eachNotification) => eachNotification.id.toString()}
            />
            {userId == leaderId ? (
                <TouchableOpacity style={styles.floatBtn} onPress={handleCreateTask}>
                    <Image source={icons.add} style={styles.icon} />
                </TouchableOpacity>
            ) : <></> }
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
        width: 150,
        height: 120,
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
        marginVertical: 4,
    },
    btn: {
        backgroundColor: colors.primary,
        padding: 7,
        width: 150,
        borderRadius: 6,
        alignItems: 'center',
        height: 30
    },
    textBtn : {
        color: colors.white
    },
    floatBtn: {
        position:'absolute',
        bottom: 50,
        right: 30,
        backgroundColor: colors.primary,
        borderRadius: 100,
        padding: 10
    },
    icon: {
        height: 40,
        width: 40,
        tintColor: colors.white
    }
})