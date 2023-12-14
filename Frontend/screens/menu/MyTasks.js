import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import TaskDetail from '../../components/TaskDetail'
import colors from '../../constants/colors'
import NotificationItem from '../../components/NotificationItem'
import { notification as NotificationRepository } from '../../repositories'
import { useSafeArea } from '../../utils/helpers/Device'
import { activity as ActivityRepository } from '../../repositories'

export default function MyTasks({ route }) {
    const userId = route.params.userId
    const status = 2
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        ActivityRepository.getMyTasks(userId, status)
            .then((res) => {
                setTasks(res.rows)
            })
            .catch((error) => {
                throw error
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TaskDetail task={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%',
    },
})
